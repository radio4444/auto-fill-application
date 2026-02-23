import { cn } from "@/libs/utils";
import ProfileItem from "./ProfileItem";
import { ChevronRight } from "lucide-react";
import { profileStorage, StorageActions } from "@/libs/storage";
import { useState, useEffect } from "react";
import { userProfile } from "@/types";


function SelectProfile() {
  //initiliaze toggle: false = close, true = open
  const [isOpen, setisOpen] = useState(false);
  const [profiles, setProfiles] = useState<userProfile[]>([])

  useEffect(()=> {
    profileStorage.getValue().then(setProfiles)

    const unwatch = profileStorage.watch((newValue)=> {
      setProfiles(newValue ?? [])
    })

    return () => unwatch()
  }, [])

  // define toggle event handler: let's user close/open dropdown
  const toggle = () => {
    // if prevState = false, then prevState = true
    setisOpen((prevState) => !prevState);
  };

  //mockProfile data
  const mockProfile: string[] = ["Profile1", "Profile2"];

  return (
    <div>
      <Button
        onClick={toggle}
        className={`w-full rounded-t-lg rounded-b-none flex justify-start items-center gap-1 transition duration-100 ease-in
          ${isOpen && "bg-[#A4A5A3] hover:bg-[#A4A5A3] border-none"} `}
      >
        <div>
          <ChevronRight className={cn(`${isOpen && "transition duration-100 ease-in rotate-90"}`)} />
        </div>
        <p>Select Profile</p>
      </Button>
      <div className={cn("flex flex-col")}>
        {isOpen &&
          profiles.map((eachProfile) => (
            <ProfileItem
              key={eachProfile.id}
              profile={eachProfile.profileName}
              onEdit={() => console.log("Edit", eachProfile)}
              onDelete={() => StorageActions.deleteProfile(eachProfile.id)}
            />
          ))
            
        }

        {isOpen && profiles.length === 0 && (
          <p className="text-gray-500 text-center text-sm">No Profiles found</p>
        )}
        
      </div>
    </div>
  );
}

export default SelectProfile;
