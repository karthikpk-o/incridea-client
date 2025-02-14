import { generateUploadButton } from "@uploadthing/react";
import { getSession } from "next-auth/react";
import { memo, type ComponentProps } from "react";

import type { OurFileRouter } from "~/server/uploadthing";
import { env } from "~/env";

const UploadButton = memo(
  (
    props: ComponentProps<ReturnType<typeof generateUploadButton>> & {
      customId?: string;
    },
  ) => {
    const Comp = generateUploadButton({
      url: `${env.NEXT_PUBLIC_BASE_URL}/api/uploadthing`,
    });

    return (
      <Comp
        {...props}
        headers={async () => ({
          Authorization: (await getSession())?.accessToken ?? "",
          ...(props.customId ? { custom_id: props.customId } : {}),
        })}
      />
    );
  },
);

UploadButton.displayName = "UploadButton";

export { UploadButton };
