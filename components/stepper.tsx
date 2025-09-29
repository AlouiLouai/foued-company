"use client"

interface StepperProps {
  currentStep: number
  totalSteps: number
}

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-black border border-black ${
              step === currentStep ? "bg-transparent" : "bg-transparent"
            }`}
          >
            {step}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`h-1 w-24 mx-2 border-t border-black ${
                step < currentStep ? "bg-transparent" : "bg-transparent"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}