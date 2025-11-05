import { Calendar, Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'

const TripDurationUI = ({ onSelectOptions }: {
    onSelectOptions: (value: string) => void;
}) => {
    const [days, setDays] = useState(7)

    const handleDecrease = () => {
        if (days > 1) {
            setDays(days - 1)
        }
    }

    const handleIncrease = () => {
        if (days < 90) {
            setDays(days + 1)
        }
    }

    const handleConfirm = () => {
        onSelectOptions(`${days} days`)
    }

    const getDurationCategory = (numDays: number) => {
        if (numDays <= 3) return "Quick Getaway"
        if (numDays <= 7) return "Week-long Adventure"
        if (numDays <= 14) return "Extended Journey"
        return "Epic Adventure"
    }

    const getDurationDescription = (numDays: number) => {
        if (numDays <= 3) return "Perfect for a quick weekend escape"
        if (numDays <= 7) return "Ideal for a comprehensive exploration"
        if (numDays <= 14) return "Extended time to fully immerse yourself"
        return "Deep exploration and discovery awaits"
    }

    return (
        <div className='mt-4 bg-white rounded-xl border-2 border-gray-200 p-6 shadow-sm'>
            <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-800">Select Trip Duration</h3>
                </div>
                <p className="text-sm text-gray-600">{getDurationCategory(days)}</p>
            </div>

            {/* Counter Display */}
            <div className="flex items-center justify-center gap-4 mb-6">
                <Button
                    onClick={handleDecrease}
                    disabled={days <= 1}
                    size="icon"
                    variant="outline"
                    className="h-12 w-12 rounded-full border-2 hover:border-blue-600 hover:bg-blue-50 disabled:opacity-30"
                >
                    <Minus className="h-5 w-5" />
                </Button>

                <div className="min-w-[140px] text-center">
                    <div className="text-5xl font-bold text-blue-600">{days}</div>
                    <div className="text-sm text-gray-600 mt-1">
                        {days === 1 ? 'Day' : 'Days'}
                    </div>
                </div>

                <Button
                    onClick={handleIncrease}
                    disabled={days >= 90}
                    size="icon"
                    variant="outline"
                    className="h-12 w-12 rounded-full border-2 hover:border-blue-600 hover:bg-blue-50 disabled:opacity-30"
                >
                    <Plus className="h-5 w-5" />
                </Button>
            </div>

            {/* Description */}
            <div className="text-center mb-6">
                <p className="text-sm text-gray-600 italic">{getDurationDescription(days)}</p>
            </div>

            {/* Quick Select Buttons */}
            <div className="grid grid-cols-4 gap-2 mb-6">
                {[3, 7, 14, 21].map((quickDays) => (
                    <button
                        key={quickDays}
                        onClick={() => setDays(quickDays)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            days === quickDays
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {quickDays}d
                    </button>
                ))}
            </div>

            {/* Confirm Button */}
            <Button
                onClick={handleConfirm}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-semibold rounded-lg"
            >
                Confirm {days} {days === 1 ? 'Day' : 'Days'}
            </Button>
        </div>
    )
}

export default TripDurationUI
