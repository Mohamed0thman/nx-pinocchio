import { render } from '@testing-library/react';
import React from 'react';
import { Dialog } from '.';

describe('SharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog isOpen={false}></Dialog>);
    expect(baseElement).toBeTruthy();
  });
});
