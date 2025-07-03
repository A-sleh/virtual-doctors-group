import ModelInput from "@/components/ui/inputs/ModelInput";
import SettingInput from "@/components/ui/inputs/SettingInput";

export default function ArticleFrom() {
  return (
    <form className="space-y-2">
      <ModelInput type="text" lable="Tile" placeHolder="Write article title ..."/>
      <ModelInput type="text" lable="Description" placeHolder="Write article description ..."/>
      <ModelInput type="file" lable="Image" placeHolder="Write article description ..."/>
    </form>
  )
}
