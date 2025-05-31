import React from 'react';

interface PanelProps {
  title: string;
  backgroundImageUrl: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  displayClass: string; 
  panelIndex: number; // Kept in props for now, though not used for title positioning
}

const CorrectedPanel: React.FC<PanelProps> = ({ title, backgroundImageUrl, isActive, onClick, children, displayClass }) => {

  const h3BaseClasses = `
    font-bold absolute m-0 z-10
    transition-all duration-300 ease-in-out
    whitespace-nowrap
  `;

  const h3ActiveClasses = `opacity-100 text-2xl sm:text-3xl`;
  const h3InactiveClasses = `opacity-90 text-lg`;

  const h3Styles: React.CSSProperties = {
    // Common styles handled by h3BaseClasses or set dynamically below
  };

  if (isActive) {
    h3Styles.top = '1.25rem';
    h3Styles.left = '1.25rem';
    h3Styles.transform = 'rotate(0deg)';
    h3Styles.transformOrigin = 'top left'; // Origin for the active, horizontal state
  } else {
    // For inactive panels, text is at bottom-left, rotated -90deg
    h3Styles.left = '1.25rem'; 
    h3Styles.bottom = '1.25rem'; 
    h3Styles.transform = 'rotate(-90deg)';
    h3Styles.transformOrigin = 'bottom left'; // Rotate around the text's own bottom-left
  }

  return (
    <div
      className={`
        relative bg-cover bg-center h-[80vh] rounded-[50px] text-white cursor-pointer m-2.5 
        transition-[flex] duration-700 ease-in-out
        ${isActive ? 'flex-[5]' : 'flex-[0.5]'}
        ${displayClass}
      `}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      onClick={onClick}
      role="button"
      aria-expanded={isActive}
      aria-label={`Panel: ${title}`}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      <div className={`absolute inset-0 bg-black ${isActive ? 'bg-opacity-70' : 'bg-opacity-40'} rounded-[50px] transition-all duration-700 ease-in-out`}></div>
      
      <h3
        className={`${h3BaseClasses} ${isActive ? h3ActiveClasses : h3InactiveClasses}`}
        style={h3Styles}
      >
        {title}
      </h3>
      
      <div 
        data-active={isActive} 
        className="custom-scrollbar absolute top-20 md:top-24 bottom-5 left-5 right-5 opacity-0 transition-opacity duration-300 ease-in-out delay-[400ms] data-[active=true]:opacity-100 overflow-y-auto p-1 sm:p-2 z-20"
        aria-hidden={!isActive}
      >
         {isActive && children}
      </div>
    </div>
  );
};

export default CorrectedPanel;