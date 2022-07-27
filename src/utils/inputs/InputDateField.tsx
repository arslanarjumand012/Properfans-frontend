import { TitleInterface } from "libs/interfaces"
import React from "react"
import InputTitle from "utils/inputs/InputTitle"

const InputDateField = ({
  data,
  icon,
  value,
  handler,
  grey
}: {
  data: TitleInterface
  icon: React.ReactNode
  value: string
  handler: (value: string) => void
  grey?: boolean
}) => {
  return (
    <>
      <div className="w-full">
        <InputTitle data={data} grey={grey} />
        <div className="relative w-full">
          <input
            className={`input h-42 w-full !pl-42 !text-14 font-semibold focus:border-purple dark:shadow-none ${
              grey ? "bg-grey-1" : "shadow-md"
            }`}
            placeholder={data.title}
            type="date"
            value={value ?? ""}
            onChange={(e) => handler(e.target.value)}
          />
          <button className="center absolute left-0 top-0 h-42 w-42">{icon}</button>
        </div>
      </div>
    </>
  )
}

export default InputDateField
