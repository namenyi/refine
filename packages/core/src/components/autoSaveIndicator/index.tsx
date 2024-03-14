import React from "react";
import { AutoSaveIndicatorProps } from "./types";
import { useTranslate } from "@hooks/i18n";

export const AutoSaveIndicator: React.FC<AutoSaveIndicatorProps> = ({
  status,
  elements: {
    success = <Message key="autoSave.success" defaultMessage="saved" />,
    error = <Message key="autoSave.error" defaultMessage="auto save failure" />,
    loading = <Message key="autoSave.loading" defaultMessage="saving..." />,
    idle = <Message key="autoSave.idle" defaultMessage="waiting for changes" />,
  } = {},
}) => {
  switch (status) {
    case "success":
      return <>{success}</>;
    case "error":
      return <>{error}</>;
    case "loading":
      return <>{loading}</>;
    default:
      return <>{idle}</>;
  }
};

const Message = ({
  key,
  defaultMessage,
}: {
  key: string;
  defaultMessage: string;
}) => {
  const translate = useTranslate();

  return <span>{translate(key, defaultMessage)}</span>;
};
