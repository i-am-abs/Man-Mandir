import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';
import { GODS_LIST } from '../constants';
import { FeatureStatus } from '../types';

const GodSelectionScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGodId, setSelectedGodId] = useState<string | null>(null);

  const handleGodSelect = (id: string, status: FeatureStatus) => {
    if (status === FeatureStatus.ACTIVE) {
        setSelectedGodId(id);
        // Short delay to let the animation play
        setTimeout(() => {
            navigate(`/content/${id}`);
        }, 400);
    }
  };

  return (
    <Layout>
      <Header title="Select Deity" backPath="/home" />
      <div className="p-4 space-y-4 pb-20 overflow-y-auto no-scrollbar">
        {GODS_LIST.map((god) => (
          <FeatureCard
            key={god.id}
            variant="list"
            title={god.name}
            subtitle={god.hindiName}
            image={god.image}
            status={god.status}
            onClick={() => handleGodSelect(god.id, god.status)}
            isHighlighted={false}
            isLoading={selectedGodId === god.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default GodSelectionScreen;