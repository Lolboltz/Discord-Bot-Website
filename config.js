import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Hotdog",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=1060711885936263228&permissions=1649753098870&scope=bot",
  //BotInvite Link
  Features: [
    {
      name: "Moderation",
      description:
        "Moderation is the process of eliminating or lessening extremes.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Automation",
      description:
        "Automation describes a wide range of technologies that reduce  human intervention in processes.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Join To Create",
      description:
        "Join to create allows you to join a voice channel and it will auto create a custom vc for you",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 30, //-  - Your
  memberCount: 1979, //--   - Bot
  executedCommand: 27000, //--  - Stats
  availableCommand: 37, //---   - Here
  //Do not change if you don't know about them
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  discordLink: "https://discord.gg/mnNpZsaJmD",
};

export default config;
