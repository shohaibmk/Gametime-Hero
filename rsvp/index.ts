import { RsvpService } from "./services/RsvpService";
import { ConsoleLogger } from "./utils/Logger";
import { Player } from "./models/RsvpModels";

const logger = new ConsoleLogger();
const rsvpService = new RsvpService(logger);

const players: Player[] = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
    { id: "3", name: "Charlie" }
];

rsvpService.addOrUpdateRsvp(players[0], "Yes");
rsvpService.addOrUpdateRsvp(players[1], "No");
rsvpService.addOrUpdateRsvp(players[2], "Maybe");

console.log("Confirmed Attendees:", rsvpService.getConfirmedAttendees());
console.log("RSVP Counts:", rsvpService.getCounts());
