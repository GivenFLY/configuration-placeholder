import React from 'react';
import { AlertTriangle, X, CheckCircle, Info, AlertOctagon } from 'lucide-react';
import { GeneratedAlert, Tone } from '../types';

interface PreviewCardProps {
  alert: GeneratedAlert;
  tone: Tone;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ alert, tone }) => {
  
  const getStyles = () => {
    switch (tone) {
      case Tone.URGENT:
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-800',
          icon: <AlertOctagon className="w-5 h-5 text-red-600" />,
          button: 'bg-red-600 hover:bg-red-700 text-white'
        };
      case Tone.FRIENDLY:
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-800',
          icon: <CheckCircle className="w-5 h-5 text-green-600" />,
          button: 'bg-green-600 hover:bg-green-700 text-white'
        };
      case Tone.TECHNICAL:
        return {
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          text: 'text-slate-800',
          icon: <Info className="w-5 h-5 text-slate-600" />,
          button: 'bg-slate-800 hover:bg-slate-900 text-white'
        };
      case Tone.HUMOROUS:
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-800',
          icon: <Info className="w-5 h-5 text-purple-600" />,
          button: 'bg-purple-600 hover:bg-purple-700 text-white'
        };
      case Tone.PROFESSIONAL:
      default:
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-800',
          icon: <AlertTriangle className="w-5 h-5 text-blue-600" />,
          button: 'bg-blue-600 hover:bg-blue-700 text-white'
        };
    }
  };

  const style = getStyles();

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
        <div className="mb-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">UI Preview (Toast/Banner)</div>
        <div className={`relative rounded-lg border p-4 shadow-sm ${style.bg} ${style.border}`}>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                    {style.icon}
                </div>
                <div className="flex-1">
                    <h3 className={`text-sm font-semibold ${style.text}`}>
                        {alert.title}
                    </h3>
                    <div className={`mt-1 text-sm ${style.text} opacity-90`}>
                        {alert.message}
                    </div>
                    <div className="mt-3">
                        <button className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${style.button}`}>
                            {alert.actionText}
                        </button>
                    </div>
                </div>
                <button className={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 focus:ring-2 ${style.text} hover:bg-black/5`}>
                    <span className="sr-only">Dismiss</span>
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    </div>
  );
};

export default PreviewCard;