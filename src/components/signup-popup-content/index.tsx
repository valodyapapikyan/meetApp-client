import React, { FC } from 'react';

import { Button } from 'dino_ui_tools';

type ISignupPopupContent = {
  handler?: () => void;
  redirectUrl: string;
};
const SignupPopupContent: FC<ISignupPopupContent> = (
  props: ISignupPopupContent
) => {
  const { handler = () => ({}), redirectUrl } = props;

  const redirectProviderUrl = (url: string) =>
    window.open(redirectUrl, '_self');

  return (
    <div>
      <Button
        onClick={redirectProviderUrl}
        iconProps={{ name: 'close', size: 'large', color: 'jusWhite' }}
        type="primary"
        buttonText="libkedin"
      ></Button>
    </div>
  );
};

export default SignupPopupContent;
