import { RsvpService } from "./services/RsvpService";
import { ConsoleLogger } from "./utils/Logger";
import { Player } from "./models/RsvpModels";

const logger = new ConsoleLogger();
const rsvpService = new RsvpService(logger);

// Define a list of players, each with an ID and name
const players: Player[] = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
    { id: "3", name: "Charlie" }
];

// Update or add the RSVP status for each player
rsvpService.addOrUpdateRsvp(players[0], "Yes"); // Alice confirms attendance
rsvpService.addOrUpdateRsvp(players[1], "No");  // Bob declines attendance
rsvpService.addOrUpdateRsvp(players[2], "Maybe"); // Charlie is unsure

// Log the list of confirmed attendees (players who selected "Yes")
console.log("Confirmed Attendees:", rsvpService.getConfirmedAttendees());

// Log the RSVP count summary: total, confirmed, and declined
console.log("RSVP Counts:", rsvpService.getCounts());
