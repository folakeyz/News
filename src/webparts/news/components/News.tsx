import * as React from 'react';
import { INewsProps } from './INewsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Alerts from './Alerts/Alert';
import * as jQuery from "jquery";

export default class News extends React.Component<INewsProps, {}> {
  public render(): React.ReactElement<INewsProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
     <>
      <Alerts />
     </>
    );
  }
}
