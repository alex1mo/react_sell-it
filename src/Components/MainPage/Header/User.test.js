import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { User } from "./User";
import { DivUser } from "./styleHeader";

import defaultAvatar from "materials/images/default-user.png";
import signOut from "materials/images/fa-sign-out.png";

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

  const state = {
    userData: false
  };

  describe("style component DivUser", () => {
    const UserWrap = shallow(<User {...props} />);
    UserWrap.setState(state);
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

    describe("block Link", () => {
      let link = UserWrap.find("Link");
      it("crashing Link", () => {
        expect(link).toHaveLength(1);
        expect(link.prop("to")).toEqual("/");
        expect(link.prop("style")).toEqual({ height: 50 + "%" });
      });

      it("crashing img", () => {
        let img = link.find("img");
        expect(link.find("img")).toHaveLength(1);
        expect(img.hasClass("header-user user__signout")).toBeTruthy();
        expect(img.prop("alt")).toEqual("Sign out");
        expect(img.prop("src")).toEqual(signOut);
      });
    });

    describe("block Menu", () => {
      let menu = UserWrap.find("Menu");
      it("crashing Menu", () => {
        expect(menu).toHaveLength(1);
      });
    });
  });

  describe("style component DivUser with new props", () => {
    const nextProps = {
      ...props,
      user: {
        ...props.user,
        isLoading: false,
        data: { avatar: "avatar", username: "username" }
      }
    };

    const state = {
      userData: true
    };

    let { avatar, username } = nextProps.user.data;

    const UserWrap = shallow(<User {...nextProps} />);
    UserWrap.setState(state);

    describe("block div", () => {
      let div = UserWrap.find("div");
      it("crashing img", () => {
        let img = div.find("img");
        expect(img.prop("src")).toEqual(avatar);
      });

      it("crashing span", () => {
        let span = div.find("span");
        expect(span.text()).toEqual(username);
      });
    });
  });
});
