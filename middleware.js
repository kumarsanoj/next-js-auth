import { NextResponse } from "next/server";
import logger from "./logger/logger";

export function middleware(req) {
  let { pathname } = req.nextUrl;
  logger.info({ event: "middleware" }, "navigating to %s", pathname);
  return NextResponse.next();
}
