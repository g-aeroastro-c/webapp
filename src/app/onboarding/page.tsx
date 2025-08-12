'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { supabase } from '@/lib/supabaseClient'
import { motion } from 'framer-motion'
import { User, Users, Calendar, ArrowRight } from 'lucide-react'

export default function OnboardingPage() {
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const steps = [
        {
            title: "Welcome to GAAC",
            description: "Let's get you set up with your account",
            icon: User
        },
        {
            title: "Join Your Team",
            description: "Connect with your colleagues and start collaborating",
            icon: Users
        },
        {
            title: "Schedule Your First Meeting",
            description: "Get started with your first team meeting",
            icon: Calendar
        }
    ]

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
        } else {
            handleComplete()
        }
    }

    const handleComplete = async () => {
        setIsLoading(true)
        try {
            // Complete onboarding logic here
            router.push('/dashboard')
        } catch (error) {
            console.error('Error completing onboarding:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const currentStepData = steps[currentStep]
    const IconComponent = currentStepData.icon

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                >
                    <div className="mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            {currentStepData.title}
                        </h1>
                        <p className="text-gray-600">
                            {currentStepData.description}
                        </p>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-center space-x-2">
                            {steps.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            <>
                                {currentStep < steps.length - 1 ? 'Next' : 'Get Started'}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                        )}
                    </button>
                </motion.div>
            </div>
        </div>
    )
}