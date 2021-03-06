import { shallowMount,mount } from "@vue/test-utils"; // vue提供的快速测试的方法
import { expect } from "chai";

import Input from "@/packages/input";
import Icon from "@/packages/icon";

describe("input", () => {
  it("1.测试input是否存在", () => {
    expect(Input).to.exist;
  });
  it("2.测试input的name属性", () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        name: "难凉热血"
      }
    });
    expect(wrapper.find("input").attributes("name")).to.eq("难凉热血");
  });
  it("3.测试input禁用状态", () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.find("input").attributes("disabled")).to.eq("disabled");
  }); 
  it("4.测试input的readonly状态", () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        readonly: true
      }
    });
    expect(wrapper.find("input").attributes("readonly")).to.eq("readonly");
  });
  it("5.测试input的placeholder", () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        placeholder: "难凉热血"
      }
    });
    expect(wrapper.find("input").attributes("placeholder")).to.eq("难凉热血");
  });
  it("6.测试input的prefixIcon", () => {
    const wrapper = shallowMount(Input, {
      stubs: {
        "nlrx-icon": Icon // 替换的功能
      },
      propsData: {
        prefixIcon: "edit"
      }
    });
    let iconEle = wrapper.vm.$el.querySelector("use")
    expect(iconEle.getAttribute("xlink:href")).to.eq("#icon-edit");
  });
  it("7.测试input的suffixIcon", () => {
    const wrapper = shallowMount(Input, {
      stubs: {
        "nlrx-icon": Icon // 替换的功能
      },
      propsData: {
        suffixIcon: "edit"
      }
    });
    expect(wrapper.find("use").attributes("href")).to.eq("#icon-edit");
  });
  it("8.测试input的clearable", () => {
    
  });
});
