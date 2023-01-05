import React from "react";
import { render } from "@testing-library/react";
import App from "../App"

describe('render', () => {
    test('renders app component', () => {
        render(<App/>);

    })
})