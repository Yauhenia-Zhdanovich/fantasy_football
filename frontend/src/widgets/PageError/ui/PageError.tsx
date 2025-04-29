import type { FC } from "react";
import { PageErrorWrapper, ReloadButton, TextError } from "./PageError.style";

export const PageError: FC = () => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <PageErrorWrapper>
      <TextError>
        Something is going wrong <br />
      </TextError>
      <ReloadButton variant="outlined" onClick={reloadPage}>
        Reload page
      </ReloadButton>
    </PageErrorWrapper>
  );
};
