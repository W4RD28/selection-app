import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { r as redirect } from "../../../../../chunks/index.js";
import "../../../../../chunks/index2.js";
import "classnames";
/* empty css                                                             */const load = async (event) => {
  const { session, supabaseClient } = await getSupabase(event);
  if (!session) {
    throw redirect(302, "/login");
  }
  let time = Date.now();
  let timeLimit = new Date();
  timeLimit.setHours(19, 0, 0, 0);
  let timeLeft = (timeLimit - time) / 1e3;
  let hoursLeft = Math.floor(timeLeft / 3600);
  hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  let minutesLeft = Math.floor(timeLeft % 3600 / 60);
  minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  let secondsLeft = Math.floor(timeLeft % 3600 % 60);
  secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  let timer = {
    hoursLeft,
    minutesLeft,
    secondsLeft
  };
  const { data, count } = await supabaseClient.from("questions").select("*", { count: "exact" });
  const { data: examData } = await supabaseClient.from("questions").select("*").eq("id", event.params.slug).single();
  const { data: answer } = await supabaseClient.from("user_answers").select("id, answer").eq("user_id", session.user.id).eq("question_id", event.params.slug).single();
  return {
    user: session.user,
    examData,
    questions: data,
    questionsCount: count,
    answer,
    userAnswer: answer?.answer,
    timer
  };
};
export {
  load
};
