"use client";

import { useState } from "react";
import { UserProgress } from "../hooks/useProgress";
import { STORE_THEMES, STORE_TITLES, STORE_BORDERS, VIP_VAULT_PRICE, VIP_VAULT_NAME, StoreItem } from "../data/storeData";
import { X, ShoppingCart, Sparkles, Check, Lock, Palette, Tag, Coins, Shield, Flame, Unlock, Crown } from "lucide-react";

interface NexusStoreModalProps {
  progress: UserProgress;
  onClose: () => void;
  onBuyItem: (itemType: "theme" | "title" | "border", itemId: string, price: number, value: string) => boolean;
  onUnlockVipVault?: () => boolean;
  onSelectTheme: (themeId: string) => void;
  onSelectTitle: (title: string) => void;
  onSelectBorder?: (borderValue: string) => void;
}

export default function NexusStoreModal({
  progress,
  onClose,
  onBuyItem,
  onUnlockVipVault,
  onSelectTheme,
  onSelectTitle,
  onSelectBorder
}: NexusStoreModalProps) {
  const [activeTab, setActiveTab] = useState<"catalog" | "vip">("catalog");
  const coins = progress.coins || 0;
  const unlockedThemes = progress.unlockedThemes || ["theme_cyberpunk"];
  const activeTheme = progress.activeTheme || "theme_cyberpunk";
  const unlockedTitles = progress.unlockedTitles || ["Cadete de Laboratorio"];
  const activeTitle = progress.activeTitle || "Cadete de Laboratorio";
  const unlockedBorders = progress.unlockedBorders || [];
  const activeBorder = progress.activeBorder || "";
  const isVip = progress.isVipUnlocked || false;

  const normalThemes = STORE_THEMES.filter(t => !t.isVipOnly);
  const vipThemes = STORE_THEMES.filter(t => t.isVipOnly);

  const normalTitles = STORE_TITLES.filter(t => !t.isVipOnly);
  const vipTitles = STORE_TITLES.filter(t => t.isVipOnly);

  const normalBorders = STORE_BORDERS.filter(b => !b.isVipOnly);
  const vipBorders = STORE_BORDERS.filter(b => b.isVipOnly);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0b0e14] border border-amber-500/40 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-[0_0_60px_rgba(245,158,11,0.2)] p-6 lg:p-8 relative">
        
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Encabezado Principal */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-white/10 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <ShoppingCart className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white m-0 flex items-center gap-2 tracking-tight">
                Tienda NEXUS Store <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
              </h2>
              <p className="text-xs text-[var(--color-text-muted)] m-0">
                Personaliza la estética de tu laboratorio y desbloquea contenido exclusivo.
              </p>
            </div>
          </div>

          {/* Saldo de Monedas */}
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black text-sm shadow-[0_0_20px_rgba(245,158,11,0.25)] shrink-0 self-start md:self-auto">
            <Coins className="w-5 h-5 text-amber-400 fill-amber-400 animate-bounce" />
            <span>{coins} Monedas NEXUS</span>
          </div>
        </div>

        {/* PESTAÑAS DE LA TIENDA */}
        <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-3">
          <button
            onClick={() => setActiveTab("catalog")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
              activeTab === "catalog"
                ? "bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-105"
                : "bg-white/5 hover:bg-white/10 text-slate-300"
            }`}
          >
            <ShoppingCart className="w-4 h-4" /> Catálogo General
          </button>

          <button
            onClick={() => setActiveTab("vip")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
              activeTab === "vip"
                ? "bg-gradient-to-r from-purple-600 to-amber-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105"
                : isVip
                ? "bg-purple-900/40 border border-purple-500/40 text-purple-300 hover:bg-purple-900/60"
                : "bg-purple-950/30 border border-purple-500/20 text-purple-400 hover:bg-purple-900/40 opacity-90"
            }`}
          >
            <Crown className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{VIP_VAULT_NAME}</span>
            {!isVip && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-300 border border-purple-400/40 ml-1">
                781 🪙
              </span>
            )}
          </button>
        </div>

        {/* CONTENIDO PESTAÑA: CATÁLOGO GENERAL */}
        {activeTab === "catalog" && (
          <div className="space-y-8">
            {/* SECCIÓN 1: TEMAS DE COLOR */}
            <section>
              <h3 className="text-sm font-extrabold text-white mb-4 flex items-center gap-2">
                <Palette className="w-4 h-4 text-[var(--color-brand-blue)]" /> Temas Visuales para el Laboratorio
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {normalThemes.map((theme: StoreItem) => {
                  const isUnlocked = unlockedThemes.includes(theme.id);
                  const isActive = activeTheme === theme.id;

                  return (
                    <div
                      key={theme.id}
                      className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                        isActive
                          ? "bg-[#162130] border-[var(--color-brand-blue)] shadow-[0_0_20px_rgba(0,180,255,0.2)]"
                          : isUnlocked
                          ? "bg-[#121722] border-white/20 hover:border-white/40"
                          : "bg-[#0d1117] border-white/5 opacity-85"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl">{theme.icon}</span>
                          <div>
                            <h4 className="text-xs font-black text-white m-0">{theme.name}</h4>
                            <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                              {theme.price === 0 ? "Gratis" : `${theme.price} Monedas`}
                            </span>
                          </div>
                        </div>

                        <div
                          className="w-5 h-5 rounded-full border border-white/30 shadow-inner"
                          style={{ backgroundColor: theme.primaryColor }}
                        />
                      </div>

                      <p className="text-[10px] text-[var(--color-text-muted)] m-0 mb-3 leading-relaxed">
                        {theme.description}
                      </p>

                      <div className="flex justify-end">
                        {isActive ? (
                          <span className="px-3 py-1 rounded-lg bg-[var(--color-brand-blue-dim)] text-[var(--color-brand-blue)] font-bold text-[10px] flex items-center gap-1 border border-[var(--color-brand-blue)]/30">
                            <Check className="w-3 h-3" /> Equipado
                          </span>
                        ) : isUnlocked ? (
                          <button
                            onClick={() => onSelectTheme(theme.id)}
                            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-[10px] transition-colors"
                          >
                            Equipar
                          </button>
                        ) : (
                          <button
                            disabled={coins < theme.price}
                            onClick={() => onBuyItem("theme", theme.id, theme.price, theme.name)}
                            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-[10px] flex items-center gap-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                          >
                            <Lock className="w-3 h-3" /> Canjear ({theme.price} 🪙)
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECCIÓN 2: TÍTULOS DE CREADOR */}
            <section>
              <h3 className="text-sm font-extrabold text-white mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-amber-400" /> Títulos de Honor para tu Perfil
              </h3>
              <div className="space-y-2.5">
                {normalTitles.map((title: StoreItem) => {
                  const isUnlocked = unlockedTitles.includes(title.value);
                  const isActive = activeTitle === title.value;

                  return (
                    <div
                      key={title.id}
                      className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-amber-500/10 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                          : isUnlocked
                          ? "bg-[#121722] border-white/10"
                          : "bg-[#0d1117] border-white/5 opacity-85"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-extrabold text-xs border border-amber-500/30">
                            {title.value}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--color-text-muted)]">{title.price} 🪙</span>
                        </div>
                        <p className="text-[10px] text-[var(--color-text-muted)] m-0 mt-1">{title.description}</p>
                      </div>

                      <div>
                        {isActive ? (
                          <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-[10px] flex items-center gap-1 border border-amber-500/30">
                            <Check className="w-3 h-3" /> Equipado
                          </span>
                        ) : isUnlocked ? (
                          <button
                            onClick={() => onSelectTitle(title.value)}
                            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-[10px] transition-colors"
                          >
                            Equipar
                          </button>
                        ) : (
                          <button
                            disabled={coins < title.price}
                            onClick={() => onBuyItem("title", title.id, title.price, title.value)}
                            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-[10px] flex items-center gap-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                          >
                            <Lock className="w-3 h-3" /> Canjear ({title.price} 🪙)
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECCIÓN 3: MARCOS Y AURAS DE AVATAR */}
            <section>
              <h3 className="text-sm font-extrabold text-white mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" /> Marcos & Auras para tu Avatar
              </h3>
              <div className="grid md:grid-cols-3 gap-3">
                {normalBorders.map((border: StoreItem) => {
                  const isUnlocked = unlockedBorders.includes(border.id);
                  const isActive = activeBorder === border.value;

                  return (
                    <div
                      key={border.id}
                      className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                        isActive
                          ? "bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_15px_rgba(52,211,153,0.2)]"
                          : isUnlocked
                          ? "bg-[#121722] border-white/10"
                          : "bg-[#0d1117] border-white/5 opacity-85"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center bg-black/40 ${border.value}`}>
                          <span>{border.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-white m-0">{border.name}</h4>
                          <span className="text-[10px] font-mono text-[var(--color-text-muted)]">{border.price} 🪙</span>
                        </div>
                      </div>

                      <p className="text-[10px] text-[var(--color-text-muted)] m-0 mb-3">{border.description}</p>

                      <div className="flex justify-end">
                        {isActive ? (
                          <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold text-[10px] flex items-center gap-1 border border-emerald-500/30">
                            <Check className="w-3 h-3" /> Equipado
                          </span>
                        ) : isUnlocked ? (
                          <button
                            onClick={() => onSelectBorder && onSelectBorder(border.value)}
                            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-[10px] transition-colors"
                          >
                            Equipar
                          </button>
                        ) : (
                          <button
                            disabled={coins < border.price}
                            onClick={() => onBuyItem("border", border.id, border.price, border.name)}
                            className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-[10px] flex items-center gap-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            <Lock className="w-3 h-3" /> Canjear ({border.price} 🪙)
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {/* CONTENIDO PESTAÑA: TIENDA OCULTA VIP (BÓVEDA OMEGA) */}
        {activeTab === "vip" && (
          <div>
            {!isVip ? (
              /* PANEL DE BLOQUEO DE LA BÓVEDA SECRETA */
              <div className="p-8 rounded-3xl bg-gradient-to-b from-[#180a24] to-[#0d0414] border-2 border-purple-500/40 text-center space-y-5 relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.25)]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

                <div className="w-20 h-20 mx-auto rounded-3xl bg-purple-900/30 border border-purple-500/50 flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-pulse">
                  🌌
                </div>

                <div className="max-w-md mx-auto space-y-2">
                  <h3 className="text-xl font-black text-gradient-purple text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-amber-300 to-purple-400 m-0">
                    {VIP_VAULT_NAME}
                  </h3>
                  <p className="text-xs text-purple-200/80 leading-relaxed">
                    Has localizado el sector prohibido del laboratorio. Comprando este pase de expansión obtendrás **acceso permanente para siempre** a objetos legendarios, auras cósmicas y títulos supremos.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-purple-500/30 inline-block text-left space-y-1.5 max-w-sm w-full">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-bold">Pase de Expansión Permanente:</span>
                    <span className="text-amber-400 font-black flex items-center gap-1">
                      <Coins className="w-3.5 h-3.5 fill-amber-400" /> {VIP_VAULT_PRICE} 🪙
                    </span>
                  </div>
                  <div className="text-[10px] text-purple-300/70">
                    ✔ Desbloqueo definitivo de por vida en tu perfil.
                  </div>
                </div>

                <div>
                  <button
                    disabled={coins < VIP_VAULT_PRICE}
                    onClick={() => onUnlockVipVault && onUnlockVipVault()}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-amber-500 to-purple-600 hover:from-purple-500 hover:to-amber-400 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 mx-auto transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Unlock className="w-4 h-4 text-amber-300" /> Desbloquear Bóveda Omega ({VIP_VAULT_PRICE} 🪙)
                  </button>
                  {coins < VIP_VAULT_PRICE && (
                    <p className="text-[10px] text-rose-400 mt-2 font-bold">
                      Te faltan {VIP_VAULT_PRICE - coins} Monedas NEXUS. ¡Completa más lecciones para acumularlas!
                    </p>
                  )}
                </div>
              </div>
            ) : (
              /* TIENDA VIP DESBLOQUEADA */
              <div className="space-y-8 animate-fade-in">
                <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    <Crown className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-amber-300 m-0">
                      ¡PASE OMEGA ACTIVO Y PERMANENTE! 🌌
                    </h3>
                    <p className="text-[11px] text-purple-200/80 m-0">
                      Tienes acceso ilimitado al contenido exclusivo del Sector Zero.
                    </p>
                  </div>
                </div>

                {/* TEMAS VIP */}
                <section>
                  <h4 className="text-xs font-black uppercase text-purple-300 tracking-wider mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-purple-400" /> Temas de Leyenda OMEGA
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {vipThemes.map((theme: StoreItem) => {
                      const isUnlocked = unlockedThemes.includes(theme.id);
                      const isActive = activeTheme === theme.id;

                      return (
                        <div
                          key={theme.id}
                          className={`p-4 rounded-2xl border transition-all flex flex-col justify-between bg-purple-950/20 ${
                            isActive
                              ? "border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                              : isUnlocked
                              ? "border-purple-500/40"
                              : "border-purple-500/20"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{theme.icon}</span>
                              <div>
                                <h4 className="text-xs font-black text-amber-200 m-0">{theme.name}</h4>
                                <span className="text-[10px] font-mono text-purple-300">{theme.price} 🪙</span>
                              </div>
                            </div>

                            <div
                              className="w-5 h-5 rounded-full border border-purple-400 shadow-inner"
                              style={{ backgroundColor: theme.primaryColor }}
                            />
                          </div>

                          <p className="text-[10px] text-purple-200/70 m-0 mb-3 leading-relaxed">{theme.description}</p>

                          <div className="flex justify-end">
                            {isActive ? (
                              <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-[10px] flex items-center gap-1 border border-amber-500/40">
                                <Check className="w-3 h-3" /> Equipado
                              </span>
                            ) : isUnlocked ? (
                              <button
                                onClick={() => onSelectTheme(theme.id)}
                                className="px-3 py-1 rounded-lg bg-purple-500/30 hover:bg-purple-500/50 text-purple-200 font-bold text-[10px] transition-colors border border-purple-500/40"
                              >
                                Equipar
                              </button>
                            ) : (
                              <button
                                disabled={coins < theme.price}
                                onClick={() => onBuyItem("theme", theme.id, theme.price, theme.name)}
                                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-black font-black text-[10px] flex items-center gap-1 transition-all disabled:opacity-40"
                              >
                                <Lock className="w-3 h-3" /> Canjear ({theme.price} 🪙)
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* TÍTULOS VIP */}
                <section>
                  <h4 className="text-xs font-black uppercase text-purple-300 tracking-wider mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-purple-400" /> Títulos de Honor OMEGA
                  </h4>
                  <div className="space-y-2">
                    {vipTitles.map((title: StoreItem) => {
                      const isUnlocked = unlockedTitles.includes(title.value);
                      const isActive = activeTitle === title.value;

                      return (
                        <div
                          key={title.id}
                          className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between bg-purple-950/20 ${
                            isActive
                              ? "border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                              : isUnlocked
                              ? "border-purple-500/40"
                              : "border-purple-500/20"
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded-md bg-purple-900/60 text-purple-200 font-black text-xs border border-purple-400/40">
                                {title.value}
                              </span>
                              <span className="text-[10px] font-mono text-purple-300">{title.price} 🪙</span>
                            </div>
                            <p className="text-[10px] text-purple-200/70 m-0 mt-1">{title.description}</p>
                          </div>

                          <div>
                            {isActive ? (
                              <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-[10px] flex items-center gap-1 border border-amber-500/40">
                                <Check className="w-3 h-3" /> Equipado
                              </span>
                            ) : isUnlocked ? (
                              <button
                                onClick={() => onSelectTitle(title.value)}
                                className="px-3 py-1 rounded-lg bg-purple-500/30 hover:bg-purple-500/50 text-purple-200 font-bold text-[10px] transition-colors border border-purple-500/40"
                              >
                                Equipar
                              </button>
                            ) : (
                              <button
                                disabled={coins < title.price}
                                onClick={() => onBuyItem("title", title.id, title.price, title.value)}
                                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-black font-black text-[10px] flex items-center gap-1 transition-all disabled:opacity-40"
                              >
                                <Lock className="w-3 h-3" /> Canjear ({title.price} 🪙)
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* BORDES VIP */}
                <section>
                  <h4 className="text-xs font-black uppercase text-purple-300 tracking-wider mb-3 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-purple-400" /> Auras de Leyenda OMEGA
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {vipBorders.map((border: StoreItem) => {
                      const isUnlocked = unlockedBorders.includes(border.id);
                      const isActive = activeBorder === border.value;

                      return (
                        <div
                          key={border.id}
                          className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between bg-purple-950/20 ${
                            isActive
                              ? "border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                              : isUnlocked
                              ? "border-purple-500/40"
                              : "border-purple-500/20"
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center bg-black/40 ${border.value}`}>
                              <span>{border.icon}</span>
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-purple-200 m-0">{border.name}</h4>
                              <span className="text-[10px] font-mono text-purple-300">{border.price} 🪙</span>
                            </div>
                          </div>

                          <p className="text-[10px] text-purple-200/70 m-0 mb-3">{border.description}</p>

                          <div className="flex justify-end">
                            {isActive ? (
                              <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-[10px] flex items-center gap-1 border border-amber-500/40">
                                <Check className="w-3 h-3" /> Equipado
                              </span>
                            ) : isUnlocked ? (
                              <button
                                onClick={() => onSelectBorder && onSelectBorder(border.value)}
                                className="px-3 py-1 rounded-lg bg-purple-500/30 hover:bg-purple-500/50 text-purple-200 font-bold text-[10px] transition-colors border border-purple-500/40"
                              >
                                Equipar
                              </button>
                            ) : (
                              <button
                                disabled={coins < border.price}
                                onClick={() => onBuyItem("border", border.id, border.price, border.name)}
                                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-black font-black text-[10px] flex items-center gap-1 transition-all disabled:opacity-40"
                              >
                                <Lock className="w-3 h-3" /> Canjear ({border.price} 🪙)
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
