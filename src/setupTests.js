import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("react-scroll-to-component", () => "react-scroll-to-component");
jest.mock("react-inview-monitor", () => "react-inview-monitor");
