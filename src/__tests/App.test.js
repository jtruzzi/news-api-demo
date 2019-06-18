import React from "react";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import App from "../App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App component testing", function() {
  it("renders welcome message", function() {
    const wrapper = shallow(<App />);
    const healthMenu = <div class="css-d12kpy col-12">NO RESULTS</div>;
    console.info(wrapper);
    expect(wrapper.contains(healthMenu)).to.equal(true);
  });
});
