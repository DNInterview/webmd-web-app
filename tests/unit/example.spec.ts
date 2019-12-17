import { shallowMount } from "@vue/test-utils";
import CrudView from "@/modules/core/components/CrudView.vue";

describe("CrudView.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(CrudView, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
