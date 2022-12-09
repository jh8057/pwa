import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TheWelcome from "../TheWelcome.vue";

describe("TheWelcome", () => {
  it("1-1.renders properly", () => {
    const wrapper = mount(TheWelcome, { props: { msg: null } });
    expect(wrapper.text()).toContain("김재현입니다.");
  });
});
