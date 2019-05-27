import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { User } from "./User";
import { DivUser } from "./styleHeader";

import defaultAvatar from "materials/images/default-user.png";

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
    it("crashing component DivUser", () => {
      expect(UserWrap.find(DivUser)).toHaveLength(1);
      expect(
        UserWrap.hasClass("productlist-header header__user user")
      ).toBeTruthy();
    });

    describe("block div", () => {
      let div = UserWrap.find("div");
      it("crashing div", () => {
        expect(div).toHaveLength(1);
        expect(div.hasClass("header-user user__name name")).toBeTruthy();
      });

      it("crashing img", () => {
        let img = div.find("img");
        console.log(img.props());
        expect(div.find("img")).toHaveLength(1);
        expect(img.hasClass("user-name name__foto")).toBeTruthy();
        expect(img.prop("alt")).toEqual("User Foto");
        expect(img.prop("src")).toEqual(defaultAvatar);
      });

      it("crashing span", () => {
        let span = div.find("span");
        expect(div.find("span")).toHaveLength(1);
        expect(span.hasClass("user-name name__text")).toBeTruthy();
        expect(span.text()).toEqual("");
      });
    });
  });
});
