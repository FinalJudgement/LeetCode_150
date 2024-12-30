function timeConversion(s) {
  let input = s.split("");
  input.splice(input.length - 2, 2);
  input = input.join("");
  input = input.split(":");

  if (s.includes("AM")) {
    if (input[0] === "12") {
      input[0] = "00";
    } else {
      input[0];
    }
  } else {
    if (input[0] !== "12") {
      input[0] = +input[0] + 12;
    }
  }
  input = input.join(":");
  console.log(input);
  return input;
}

function Optimized(s) {
  let hour = s.substring(0, 2);
  let isPm = s.includes("PM");

  const timeComponents = s.substring(0, 8);

  if (hour === "12") {
    return isPm ? timeComponents : timeComponents.replace("12", "00");
  }

  return isPm
    ? timeComponents.replace(hour, String(Number(hour) + 12))
    : timeComponents;
}
