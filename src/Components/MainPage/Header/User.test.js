import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { User } from "./User";
import { DivUser } from "./styleHeader";

Enzyme.configure({ adapter: new Adapter() });

describe("User component testing", () => {
  const props = {
    user: {
      isLoading: null,
      isLoadingError: null,
      data: null
    },
    profile: jest.fn()
  };

  describe("style component DivUser", () => {
    const UserWrap = shallow(<User {...props} />);
    it("crashing", () => {
      // let div = UserWrap.find("div");
      // console.log(div.hasClass("header-user user__name name"));
      expect(UserWrap.find(DivUser)).toHaveLength(1);
      expect(
        UserWrap.hasClass("productlist-header header__user user")
      ).toBeTruthy();
    });
  });

  // describe("User component isloading", () => {
  //   const nextProps = { ...props, user: { ...props.user, isLoading: true } };
  //   const UserWrap = shallow(<User {...nextProps} />);
  //   it("crashing initial", () => {});
  // expect(UserWrap.find("div")).toHaveLength(1);
  // expect(UserWrap.find("Link")).toHaveLength(1);
  // expect(UserWrap.find("Menu")).toHaveLength(1);
  // expect(UserWrap.find("img")).toHaveLength(2);
  // expect(UserWrap.find("span")).toHaveLength(1);
  // expect(UserWrap.find("span").text()).toEqual("");
  // });
});
