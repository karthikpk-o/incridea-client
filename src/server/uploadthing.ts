import {
  createUploadthing,
  UTFiles,
  type FileRouter,
} from "uploadthing/next-legacy";
import { authenticateUser } from "./authrnticateUser";

const f = createUploadthing();

export const ourFileRouter = {
  asset: f({
    image: {
      maxFileCount: 1,
      maxFileSize: "512KB",
    },
    video: {
      maxFileCount: 1,
      maxFileSize: "16MB",
    },
    "model/gltf-binary": {
      maxFileCount: 1,
      maxFileSize: "4MB",
    },
  })
    .middleware(async ({ req, res, files }) => {
      const user = await authenticateUser();
      if (!user || user.role !== "ADMIN") throw new Error("Unauthorized");
      return {
        [UTFiles]: files.map((file) => ({
          ...file,
          customId: "asset_" + file.name,
        })),
      };
    })
    .onUploadComplete((data) => {
      console.log("Gallery Image:", data.file.url);
    }),

  event: f({
    image: {
      maxFileCount: 1,
      maxFileSize: "512KB",
    },
  })
    .middleware(async ({ req, res }) => {
      const user = await authenticateUser();
      if (!user || user.role !== "ORGANIZER") throw new Error("Unauthorized");
      return {};
    })
    .onUploadComplete((data) => {
      console.log("event Image:", data.file.url);
    }),

  quiz: f({
    image: {
      maxFileCount: 1,
      maxFileSize: "512KB",
    },
  })
    .middleware(async ({ req, res }) => {
      const user = await authenticateUser();
      if (!user || user.role !== "ORGANIZER") throw new Error("Unauthorized");
      return {};
    })
    .onUploadComplete((data) => {
      console.log("Question Image :", data.file.url);
    }),

  accommodation: f({
    image: {
      maxFileCount: 1,
      maxFileSize: "512KB",
    },
  })
    .middleware(async ({ req, res }) => {
      const user = await authenticateUser();
      if (!user) throw new Error("Unauthorized");
      return {};
    })
    .onUploadComplete((data) => {
      console.log("Question Image :", data.file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
