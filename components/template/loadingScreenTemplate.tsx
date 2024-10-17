import React from 'react';
import { ImageBackgroundWrapper } from '../molecules/ImageBackgroundWrapper';
import { LoadingContent } from '../organisms/LoadingContent';

export const LoadingScreenTemplate = () => {
  return (
    <ImageBackgroundWrapper>
      <LoadingContent />
    </ImageBackgroundWrapper>
  );
};
