import {
  Flex,
  FlexTypes,
  FlexWrap,
  TextInput,
  Variants,
  Checkbox,
  ColorPicker,
} from "@yehonatan604/rainbow-plus-ui/src";
import RangeInput from "@yehonatan604/rainbow-plus-ui/src/UI/Components/Forms/RangeInput/Component";
import DatePicker from "react-datepicker";

const FormInputExamples = () => {
  return (
    <form className="w-full">
      <Flex
        justify={FlexTypes.Center}
        align={FlexTypes.Start}
        wrap={FlexWrap.Wrap}
        className="m-auto mb-5 gap-4 w-3/4"
      >
        <TextInput label="Name" placeholder="Please enter name" />
        <TextInput
          label="Email"
          type="email"
          color={Variants.Failure}
          helperText="Please enter a valid email"
          defaultValue={"john#email.com"}
        />
        <TextInput
          label="Age"
          type="number"
          placeholder="34"
          color={Variants.Success}
          helperText="required"
        />
      </Flex>
      <Flex
        justify={FlexTypes.Center}
        align={FlexTypes.Center}
        wrap={FlexWrap.Wrap}
        className="m-auto my-5 gap-4 w-3/4"
      >
        <RangeInput label="Age" />
        <RangeInput label="Age" variant={Variants.Info} />
        <RangeInput label="Age" variant={Variants.Failure} />
        <RangeInput label="Age" variant={Variants.Success} />
        <RangeInput label="Age" variant={Variants.Warning} />
        <RangeInput label="Age" variant={Variants.Pink} />
        <RangeInput label="Age" variant={Variants.Purple} />
        <RangeInput label="Age" variant={Variants.Lime} />
        <RangeInput label="Age" variant={Variants.Cyan} />
      </Flex>
      <Flex
        justify={FlexTypes.Center}
        align={FlexTypes.Center}
        wrap={FlexWrap.Wrap}
        className="m-auto my-5 gap-4 w-3/4"
      >
        <Checkbox label="is checked" />
        <Checkbox label="is checked" defaultChecked showBgColor />
        <Checkbox label="is checked" defaultChecked variant={Variants.Lime} showBgColor />
        <Checkbox label="is checked" defaultChecked variant={Variants.Pink} showBgColor />
        <Checkbox
          label="is checked"
          defaultChecked
          variant={Variants.Purple}
          showBgColor
        />
        <Checkbox label="is checked" defaultChecked variant={Variants.Cyan} showBgColor />
        <Checkbox
          label="is checked"
          defaultChecked
          variant={Variants.Warning}
          showBgColor
        />
        <Checkbox
          label="is checked"
          defaultChecked
          variant={Variants.Failure}
          showBgColor
        />
        <Checkbox
          label="is checked"
          defaultChecked
          variant={Variants.Success}
          showBgColor
        />
      </Flex>
      <Flex
        justify={FlexTypes.Center}
        align={FlexTypes.Center}
        className="m-auto my-5 gap-4 w-3/4"
      >
        <ColorPicker label="color" />
      </Flex>
      <Flex
        justify={FlexTypes.Center}
        align={FlexTypes.Center}
        className="m-auto my-5 gap-4 w-3/4"
      >
        <DatePicker label="today" />
      </Flex>
    </form>
  );
};

export default FormInputExamples;
