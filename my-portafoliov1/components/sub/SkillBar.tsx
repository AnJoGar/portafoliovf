import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

interface SkillBarProps {
  knowledgePercentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ knowledgePercentage }: SkillBarProps) => {
  return (
    <ProgressBar
      completed={knowledgePercentage}
      bgColor="#e0e0e0"
      baseBgColor="#303030"
    />
  );
};

export default SkillBar;