"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

type Props = {
  error?: string
  disabled?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export const PhoneField = forwardRef<HTMLInputElement, Props>(function PhoneField(
  { error, disabled, className, ...rest },
  ref,
) {
  return (
    <div className="space-y-1">
      <label htmlFor="phone" className="block text-sm font-medium text-[#1F2937]">
        رقم التيليفون المغربي
      </label>
      <input
        ref={ref}
        id="phone"
        type="tel"
        inputMode="numeric"
        placeholder="مثال: 0612345678 ولا +212612345678"
        disabled={disabled}
        className={cn(
          "w-full px-4 py-3 rounded-xl border text-[#111827] placeholder:text-[#4B5563]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C4A] transition",
          error
            ? "border-red-400 focus:ring-red-400 bg-red-50"
            : "border-[#E5E7EB] focus:border-[#0F5C4A]",
          disabled && "opacity-60 cursor-not-allowed",
          className,
        )}
        {...rest}
      />
      {error ? (
        <p role="alert" className="text-xs text-red-500">
          {error}
        </p>
      ) : (
        <p className="text-xs text-[#4B5563]">الصيغة: 0612345678 ولا +212612345678</p>
      )}
    </div>
  )
})
