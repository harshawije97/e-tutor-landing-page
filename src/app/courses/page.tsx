import { redirect } from "next/navigation";
import React from "react";

function CoursesPage() {
  redirect("/");
  return <div>CoursesPage</div>;
}

export default CoursesPage;
