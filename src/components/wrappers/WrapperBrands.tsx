import FanSide from "components/fan/FanSide"
import MenuFan from "components/menus/MenuFan"
import NavFan from "components/nav/NavFan"
import WrapperSwipe from "components/wrappers/WrapperSwipe"
import { LinkInterface } from "libs/interfaces"
import React from "react"

const WrapperBrands = ({ children, back }: { children: any; back?: LinkInterface }) => {
  return (
    <>
      <WrapperSwipe>
        <div className="hidden lg:flex">
          <NavFan />
        </div>
        <div className="w-full">
          <div className="pag brand flex w-full justify-center">
            <div className="w-full max-w-screen-xl">
              <div className="relative grid w-full grid-cols-1 items-start gap-20 md:gap-40 lg:grid-cols-[auto,1fr]">
                <div className="stick hidden w-44 lg:flex xl:w-[240px]">
                  <FanSide back={back} />
                </div>
                <div className="w-full">{children}</div>
              </div>
            </div>
          </div>
        </div>
        <MenuFan />
      </WrapperSwipe>
    </>
  )
}

export default WrapperBrands
