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
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              step === currentStep ? "bg-primary" : "bg-muted"
            }`}
          >
            {step}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`h-1 w-24 mx-2 ${
                step < currentStep ? "bg-primary" : "bg-border"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}