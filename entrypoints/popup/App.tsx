import Button from "@/components/Button";
import ToggleComponent from "@/components/dummyTest";
import InputField from "@/components/InputField";
import ProfileItem from "@/components/ProfileItem";
import SelectProfile from "@/components/SelectProfile";



function App() {
  return (
    <>
      {/* <Button variant="primary">Fill Form</Button>
    <Button variant="secondary">Check the page</Button> */}
      <div className="w-100 p-6 bg-slate-50 flex flex-col gap-4">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          UI Preview
        </h2>

        <div className="space-y-3">
          {/* Primary Button Preview */} 
          <Button variant="primary" className="w-full">
            Button
          </Button>

          {/* Secondary Button Preview */}
          <Button variant="secondary" className="w-full">
            Button
          </Button>

          {/* Cancel Button Preview */}
          <Button variant="primary" className="text-[#FF0000] w-full">
            Cancel
          </Button>

          
          {/** Input Button Preview */}
          <InputField label='Default' type="text" name="" divClassName="w-full" />
          <InputField label='Default2' type="text" name="" divClassName="w-full" />

          {/* Profile Button Preview */}
          <ProfileItem profile="Profile1"/>

          {/* Profile Button Preview */}
          <ProfileItem profile="Profile2"/>

          {/* Select Button Preview*/}
          <SelectProfile/>
            
        </div>

        <p className="text-xs text-center text-gray-400">Popup Preview Mode</p>
      </div>
    </>
  );
}

export default App;

// For dropdown, I will use select component
