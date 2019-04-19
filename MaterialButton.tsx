import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import Button from "@material-ui/core/Button";

type Props = {
  text: string;
  height: number;
  width: number;
  color: any;
  variant: any;
  disabled: boolean;
};

export class MaterialButton extends React.Component<Props> {
  // Return the component contents in JSX
  render() {
    return (
      <div>
        <Button
          variant={this.props.variant}
          disabled={this.props.disabled}
          color={this.props.color}
        >
          {this.props.text}
        </Button>
      </div>
    );
  }

  // Set default values for props if there are none
  static defaultProps: Props = {
    text: "Hello World!",
    width: 128,
    height: 36,
    color: "primary",
    variant: "contained",
    disabled: false
  };

  // Add Framer UI for this component (in the properties panel)
  static propertyControls: PropertyControls<Props> = {
    variant: {
      type: ControlType.Enum,
      title: "Variant",
      defaultValue: "contained",
      options: [
        "contained",
        "outlined",
        "text",
        "fab",
        "extendedFab",
        "flat",
        "rised"
      ],
      optionTitles: [
        "Contained",
        "Outlined",
        "Text",
        "FAB",
        "Extended FAB",
        "Flat",
        "Rised"
      ]
    },
    color: {
      type: ControlType.Enum,
      title: "Color",
      defaultValue: "primary",
      options: ["primary", "secondary", "default", "inherit"],
      optionTitles: ["Primary", "Secondary", "Default", "Inherit"]
    },
    disabled: {
      type: ControlType.Boolean,
      title: "Disableed?",
      defaultValue: false,
      disabledTitle: "No",
      enabledTitle: "Yes"
    },
    text: { type: ControlType.String, title: "Text" }
  };
}
