import { Select } from "@radix-ui/themes";


interface pageProps {
  optionList?: any;
  defaultValue: string;
}
const CustomSelect = ({ optionList, defaultValue }: pageProps) => {
  return (
    <Select.Root defaultValue={defaultValue}>
      <Select.Trigger variant="ghost" />
      <Select.Content>
        {optionList.map((item: any, index: number) => {
          return (
            <Select.Item value={item} key={index}>
              {item}
            </Select.Item>
          );
        })}
      </Select.Content>
    </Select.Root>
  );
};

export default CustomSelect;
