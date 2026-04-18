import React from 'react';
import { Activity, Shield, Terminal } from 'lucide-react';

const LiveOperations = ({ t }: { t: any }) => {
  const ops = [
    { id: 1, agent: 'Sentinel', status: 'Scanning CME Market', icon: <Activity size={16} /> },
    { id: 2, agent: 'IdentityGuard', status: 'Zero-Trust Verified', icon: <Shield size={16} /> },
    { id: 3, agent: 'BionicBot', status: 'Learning-log.md updated', icon: <Terminal size={16} /> },
  ];

  return (
    <section id="live-ops" className="px-6 py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-3 h-3 bg-[#1DB954] rounded-full animate-ping" />
              {t.live_ops.title}
            </h2>
            <span className="text-xs font-mono text-[#1DB954]">SYSTEM_LIVE: 99.9% UPTIME</span>
          </div>
          <div className="space-y-4">
            {ops.map((op) => (
              <div key={op.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#1DB954]/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-[#1DB954]">{op.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-white">{op.agent}</p>
                    <p className="text-xs text-gray-500 font-mono">{op.status}</p>
                  </div>
                </div>
                <span className="text-[10px] text-gray-600">SEC_TRANS_0x{op.id}f4</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveOperations;