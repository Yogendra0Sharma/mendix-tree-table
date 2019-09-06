import { Component, createElement, ReactNode } from "react";
import classNames from "classnames";

export interface ButtonBarButtonProps {
    caption: string;
    className?: string;
    disabled?: boolean;
    onClick: () => void;
}

export interface ButtonBarProps {
    className?: string;
    style?: object;
    buttons: ButtonBarButtonProps[];
}

export class ButtonBar extends Component<ButtonBarProps> {
    render(): ReactNode {
        if (!this.props.buttons) {
            return null;
        }
        const { className, buttons } = this.props;
        return createElement(
            "div",
            {
                className: classNames("buttonbar", className)
            },
            buttons.map((button, index) =>
                createElement(
                    "button",
                    {
                        key: `widget-treetable-buttonbar-button-${index}`,
                        className: classNames("btn mx-button", button.className, button.disabled ? "disabled" : ""),
                        disabled: button.disabled ? "disabled" : false,
                        onClick: button.onClick
                    },
                    button.caption
                )
            )
        );
    }
}
