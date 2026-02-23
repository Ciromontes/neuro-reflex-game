import React, { useState } from 'react';
import { Copy, ExternalLink, Coffee, X } from 'lucide-react';

const NEQUI_NUMBER = '3102374172';
const PAYPAL_EMAIL = 'ciromontes25@hotmail.com';

async function copyToClipboard(text: string): Promise<boolean> {
  const value = String(text ?? '');
  if (!value) return false;
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch { /* fall back */ }
  try {
    const ta = document.createElement('textarea');
    ta.value = value;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-1000px;left:-1000px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch { return false; }
}

/* ── Inline styles (matches app aesthetic: dark bg, amber accent, Orbitron/Space Mono) ── */
const tabStyle = (active: boolean): React.CSSProperties => ({
  padding: '8px 14px',
  borderRadius: 10,
  border: `1px solid ${active ? '#ffd700' : 'rgba(255,255,255,0.15)'}`,
  background: active ? '#ffd700' : 'rgba(255,255,255,0.05)',
  color: active ? '#0a0e27' : '#fff',
  fontFamily: "'Orbitron', sans-serif",
  fontSize: 12,
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'all 0.2s',
});

const S: Record<string, React.CSSProperties> = {
  card: {
    width: '100%',
    maxWidth: 440,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
    border: '2px solid rgba(0,255,135,0.25)',
    borderRadius: 16,
    padding: '20px 22px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
    fontFamily: "'Space Mono', monospace",
    color: '#fff',
    margin: '0 auto',
    position: 'relative',
  },
  topRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 },
  heading: { fontFamily: "'Orbitron', sans-serif", fontSize: 18, fontWeight: 900, color: '#ffd700', margin: 0 },
  sub: { fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4 },
  tabRow: { display: 'flex', gap: 8, flexShrink: 0 },
  infoBox: {
    marginTop: 16,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  label: { fontSize: 10, letterSpacing: 2, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' },
  value: { fontFamily: "'Orbitron', sans-serif", fontSize: 22, fontWeight: 900, color: '#fff', margin: '4px 0' },
  hint: { fontSize: 11, color: 'rgba(255,255,255,0.35)' },
  copyBtn: {
    flexShrink: 0,
    background: 'linear-gradient(135deg, #ffd700, #ffa500)',
    color: '#0a0e27',
    border: 'none',
    borderRadius: 10,
    padding: '12px 16px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 900,
    fontSize: 13,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    whiteSpace: 'nowrap' as const,
  },
  qrWrap: {
    marginTop: 14,
    background: '#fff',
    borderRadius: 12,
    padding: 12,
    maxWidth: 180,
    margin: '14px auto 0',
    display: 'block',
    textAlign: 'center' as const,
  },
  qrImg: { width: '100%', height: 'auto', display: 'block' },
  note: { fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 10, textAlign: 'center' as const },
  paypalBtn: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 8,
  },
  openBtn: {
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding: '10px 14px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 700,
    fontSize: 12,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
  },
  toast: {
    marginTop: 12,
    fontSize: 13,
    fontWeight: 700,
    color: '#00ff87',
    background: 'rgba(0,255,135,0.08)',
    border: '1px solid rgba(0,255,135,0.25)',
    borderRadius: 10,
    padding: '10px 16px',
  },
};

interface CoffeeCardProps {
  /** Show in compact/embedded mode (no max-width cap) */
  compact?: boolean;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ compact = false }) => {
  const [channel, setChannel] = useState<'NEQUI' | 'PAYPAL'>('NEQUI');
  const [toast, setToast] = useState('');

  const handleCopy = async (label: string, value: string) => {
    const ok = await copyToClipboard(value);
    setToast(ok ? `${label} copiado ✅` : `No se pudo copiar. Manualmente: ${value}`);
    setTimeout(() => setToast(''), 2800);
  };

  return (
    <div style={{ ...S.card, maxWidth: compact ? '100%' : 440 }}>
      {/* Header */}
      <div style={S.topRow}>
        <div>
          <div style={S.heading}>☕ Invítanos un café</div>
          <div style={S.sub}>Si esta app te ayuda, puedes apoyarnos con una donación.</div>
        </div>
        <div style={S.tabRow}>
          <button style={tabStyle(channel === 'NEQUI')} onClick={() => setChannel('NEQUI')}>Nequi</button>
          <button style={tabStyle(channel === 'PAYPAL')} onClick={() => setChannel('PAYPAL')}>PayPal</button>
        </div>
      </div>

      {/* Nequi */}
      {channel === 'NEQUI' && (
        <>
          <div style={S.infoBox}>
            <div>
              <div style={S.label}>Nequi</div>
              <div style={S.value}>{NEQUI_NUMBER}</div>
              <div style={S.hint}>Copia el número o escanea el QR.</div>
            </div>
            <button style={S.copyBtn} onClick={() => handleCopy('Número Nequi', NEQUI_NUMBER)}>
              <Copy size={16} /> Copiar
            </button>
          </div>
          <div style={S.qrWrap}>
            <img src="/nequi-qr.jpg" alt="QR Nequi — CIRO MONTES" style={S.qrImg} />
          </div>
          <div style={S.note}>
            El QR contiene "Nequi {NEQUI_NUMBER}". Si tu app no lo abre directamente, copia el número.
          </div>
        </>
      )}

      {/* PayPal */}
      {channel === 'PAYPAL' && (
        <>
          <div style={S.infoBox}>
            <div>
              <div style={S.label}>PayPal</div>
              <div style={{ ...S.value, fontSize: 15, wordBreak: 'break-all' }}>{PAYPAL_EMAIL}</div>
              <div style={S.hint}>Envía como "amigos y familiares".</div>
            </div>
            <div style={S.paypalBtn}>
              <button style={S.copyBtn} onClick={() => handleCopy('Correo PayPal', PAYPAL_EMAIL)}>
                <Copy size={16} /> Copiar
              </button>
              <a
                href="https://www.paypal.com/paypalme/ciromontes25"
                target="_blank"
                rel="noreferrer"
                style={S.openBtn}
              >
                <ExternalLink size={14} /> Abrir PayPal
              </a>
            </div>
          </div>
          <div style={S.note}>
            Dentro de PayPal pega este correo como destinatario: <strong style={{ color: 'rgba(255,255,255,0.7)' }}>{PAYPAL_EMAIL}</strong>
          </div>
        </>
      )}

      {toast && <div style={S.toast}>{toast}</div>}
    </div>
  );
};

/* ── Floating trigger button ── */
interface CoffeeButtonProps {
  /** Label variant */
  label?: string;
}

export const CoffeeButton: React.FC<CoffeeButtonProps> = ({ label = '☕ Invítame un café' }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #ffd700 0%, #ff9500 100%)',
          color: '#0a0e27',
          border: 'none',
          borderRadius: 12,
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 900,
          fontSize: 14,
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(255,215,0,0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          letterSpacing: 0.5,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
      >
        <Coffee size={18} />
        {label}
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5,8,30,0.85)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: 460 }}>
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: -14,
                right: -14,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                zIndex: 10,
              }}
            >
              <X size={18} />
            </button>
            <CoffeeCard />
          </div>
        </div>
      )}
    </>
  );
};
