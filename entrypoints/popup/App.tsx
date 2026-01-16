import Button from "@/components/Button";
import InputField from "@/components/InputField";

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
          <Button variant="primary">
            Button
          </Button>

          {/* Secondary Button Preview */}
          <Button variant="secondary">
            Button
          </Button>

          {/* Cancel Button Preview */}
          <Button variant="primary" className="text-[#FF0000]">
            Cancel
          </Button>

          {/* Cancel Button Preview */}
          <Button variant="danger">
            Cancel
          </Button>

          {/** Input Button Preview */}
          <InputField label='Default' type="text" name="" divClassName="w-full" />
          <InputField label='Default2' type="text" name="" divClassName="w-full" />
        </div>

        <p className="text-xs text-center text-gray-400">Popup Preview Mode</p>
      </div>
    </>
  );
}

export default App;

// For dropdown, I will use select component
