/* eslint-disable @next/next/no-img-element */
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

const DashboardProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  async function logout() {
    await router.push("/");
    await signOut();
  }

  return (
    <aside
      className={`fixed z-40 w-80 h-auto transition-transform -translate-x-full sm:translate-x-0`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <ul className="space-y-2 font-medium">
          <li>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div className="flex flex-col items-center p-3">
                <img
                  src={session?.user?.image}
                  alt={session?.user.name}
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                  {session?.user.name}
                </h5>
                <span className="text-sm text-gray-600">
                  {session?.user.email}
                </span>
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={() => {
                    window.location.href = "/dashboard";
                  }}
                >
                  Dashboard
                </Button>
                <Button
                  variant="outline"
                  onClick={logout}
                  className="w-full mt-2"
                >
                  Logout
                </Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardProfile;
