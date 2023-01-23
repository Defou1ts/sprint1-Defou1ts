import React from 'react';

export type View = 'tile' | 'list';

export interface ViewTypeProps extends React.HTMLAttributes<HTMLDivElement> {
    type: View;
    active: boolean;
}
