import { useEffect, useState } from "react";
import {
  EventByOrganizerQuery,
  UpdateEventDocument,
} from "@/src/generated/generated";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { EventType } from "@/src/generated/generated";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { useMutation } from "@apollo/client";
import Spinner from "@/src/components/spinner";
import Modal from "@/src/components/modal";
import Button from "@/src/components/button";
const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then((mod) => mod.Editor);
  },
  { ssr: false }
);
export default function EditEventModal({
  event,
}: {
  event: EventByOrganizerQuery["eventByOrganizer"][0];
}) {
  const [maxTeams, setMaxTeams] = useState(event.maxTeams);
  const [name, setName] = useState(event.name);
  const [eventType, setEventType] = useState(event.eventType);
  const [maxTeamSize, setMaxTeamSize] = useState(event.maxTeamSize);
  const [minTeamSize, setMinTeamSize] = useState(event.minTeamSize);
  const [venue, setVenue] = useState(event.venue);
  const [fees, setFees] = useState(event.fees);
  const [showModal, setShowModal] = useState(false);

  function handleCloseModal() {
    setShowModal(false);
  }

  const [editorState, setEditorState] = useState<any>(
    EditorState.createEmpty()
  );
  const [updateEvent, { data, loading, error }] = useMutation(
    UpdateEventDocument,
    {
      refetchQueries: ["EventByOrganizer"],
    }
  );
  function saveHandler() {
    updateEvent({
      variables: {
        id: event.id,
        maxTeams,
        name,
        maxTeamSize,
        minTeamSize,
        venue,
        fees,
        eventType: eventType as EventType,
        description: JSON.stringify(
          convertToRaw(editorState.getCurrentContent())
        ),
      },
    });
  }

  useEffect(() => {
    const { description } = event;
    try {
      const editorState = JSON.parse(description as string) as any;
      setEditorState(
        EditorState.createWithContent(convertFromRaw(editorState))
      );
    } catch (error) {
      console.log(error);
    }
    // public-DraftStyleDefault-block
    const style = document.createElement("style");
    style.innerHTML = `.public-DraftStyleDefault-block {
      margin: 0;
    }`;

    document.head.appendChild(style);
  }, [event]);
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className="rounded-md bg-gray-900/70 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        Edit
      </Button>
      <Modal
        title="Edit Event Details"
        size="medium"
        showModal={showModal}
        onClose={handleCloseModal}>
        <div className=" p-5 ">
          <div className="mt-2">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white">
                Event Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Event Name..."
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-white">
                Event Description
              </label>
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="bg-gray-700 p-2 rounded-md text-white"
                toolbarClassName="bg-gray-700  text-black text-white"
              />
            </div>
            <div className="mb-6 flex flex-wrap gap-6 justify-between ">
              <div>
                <label
                  htmlFor="Venue"
                  className="block mb-2 text-sm font-medium text-white">
                  Venue
                </label>
                <input
                  type="text"
                  id="Venue"
                  required
                  onChange={(e) => setVenue(e.target.value)}
                  value={venue || ""}
                  className=" border w-fit   text-sm rounded-lg   block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="LC01"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Event Type
                </label>
                <select
                  id="eventType"
                  placeholder="Event Type"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-fit  bg-gray-700 border border-gray-500 h-10 px-4 pr-16 rounded-lg text-sm focus:outline-none focus:ring-2 ring-gray-500">
                  {Object.values(EventType).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-6 justify-between ">
              <div>
                <label
                  htmlFor="fees"
                  className="block mb-2 text-sm font-medium text-white">
                  Entry Fees
                </label>
                <input
                  type="number"
                  id="fees"
                  onChange={(e) => setFees(Number(e.target.value) || 0)}
                  value={fees}
                  className=" border w-fit  text-sm rounded-lg   block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Entry Fees..."
                  defaultValue={event.fees}
                />
              </div>
              {(eventType === EventType.Team ||
                eventType === EventType.TeamMultipleEntry) && (
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Team Size
                  </label>

                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      id="minTeamSize"
                      className=" border w-14  text-sm rounded-lg   block  p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Min Team Size..."
                      value={minTeamSize}
                      onChange={(e) =>
                        setMinTeamSize(Number(e.target.value) || 0)
                      }
                      min={1}
                    />
                    <span className="text-white">to</span>

                    <input
                      type="number"
                      id="maxTeamSize"
                      className=" border w-14  text-sm rounded-lg   block  p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Max Team Size..."
                      min={1}
                      value={maxTeamSize}
                      onChange={(e) =>
                        setMaxTeamSize(Number(e.target.value) || 0)
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6 flex flex-wrap gap-6 justify-between ">
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Banner
                </label>
                <input
                  type="file"
                  id="image"
                  className=" border   text-sm rounded-lg   block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Banner..."
                />
              </div>
              <div>
                <div className="flex gap-2 mb-2 items-center">
                  <label className="block  text-sm font-medium text-white">
                    Teams Limit
                  </label>
                  <input
                    type="checkbox"
                    id="teamsLimit"
                    className=" border   text-sm rounded-lg   block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Has Teams Limit..."
                    checked={maxTeams !== null}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMaxTeams(60);
                      } else {
                        setMaxTeams(null);
                      }
                    }}
                  />
                </div>

                {maxTeams ? (
                  <input
                    type="number"
                    id="maxTeams"
                    className=" border w-14  text-sm rounded-lg   block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Max Teams..."
                    min={1}
                    value={maxTeams}
                    disabled={maxTeams === null}
                    onChange={(e) => {
                      setMaxTeams(parseInt(e.target.value));
                    }}
                  />
                ) : (
                  <div className=" border  text-sm rounded-lg   block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    No Limit
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end gap-2">
            <button
              type="submit"
              onClick={saveHandler}
              disabled={loading}
              className="inline-flex items-center gap-2 justify-center rounded-md border border-transparent bg-blue-100 text-black px-4 py-2 text-sm font-medium  hover:bg-blue-200 focus:outline-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              {loading ? (
                <>
                  <Spinner size="small" className=" text-black " /> Saving
                </>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
