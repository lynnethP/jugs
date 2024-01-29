import { render, screen } from "@testing-library/react";
import Jugs from "../src/Jugs";

describe('Test <Jugs />', () => {
    test('Render the Jugs component', () => {
        const {container} = render('<Jugs />');
        expect(container).toMatchSnapshot(); 
    });
});

