import { useEffect, useRef, useState } from "react";

const STUDENTS_KEY = "classroom-star-board-students-v1";
const SOUND_KEY = "classroom-star-board-sound-v1";
const REWARD_KEY = "classroom-star-board-reward-v1";
const MAX_VISIBLE_STARS = 10;
const MILESTONES = [500, 450, 400, 350, 300, 250, 200, 150, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
const REWARD_OPTIONS = {
  star: { type: "star", icon: "⭐", label: "Sao", plural: "ngôi sao", boardTitle: "SAO" },
  apple: { type: "apple", icon: "🍎", label: "Táo", plural: "quả táo", boardTitle: "TÁO ĐỎ" },
  pizza: { type: "pizza", icon: "🍕", label: "Pizza", plural: "miếng pizza", boardTitle: "PIZZA" },
  lollipop: { type: "lollipop", icon: "🍭", label: "Kẹo", plural: "cây kẹo mút", boardTitle: "KẸO MÚT" },
  chicken: { type: "chicken", icon: "🍗", label: "Gà rán", plural: "đùi gà rán", boardTitle: "GÀ RÁN" },
  fries: { type: "fries", icon: "🍟", label: "Khoai", plural: "phần khoai", boardTitle: "KHOAI TÂY RÁN" },
  burger: { type: "burger", icon: "🍔", label: "Burger", plural: "chiếc burger", boardTitle: "BURGER" },
  donut: { type: "donut", icon: "🍩", label: "Donut", plural: "chiếc donut", boardTitle: "DONUT" },
  icecream: { type: "icecream", icon: "🍦", label: "Kem", plural: "cây kem", boardTitle: "KEM" },
  noodles: { type: "noodles", icon: "🍜", label: "Mì", plural: "bát mì", boardTitle: "MÌ" },
  cupcake: { type: "cupcake", icon: "🧁", label: "Cupcake", plural: "chiếc cupcake", boardTitle: "CUPCAKE" },
  cookie: { type: "cookie", icon: "🍪", label: "Bánh quy", plural: "chiếc bánh quy", boardTitle: "BÁNH QUY" },
  chocolate: { type: "chocolate", icon: "🍫", label: "Socola", plural: "thanh socola", boardTitle: "SOCOLA" },
  cake: { type: "cake", icon: "🍰", label: "Bánh kem", plural: "miếng bánh kem", boardTitle: "BÁNH KEM" },
  popcorn: { type: "popcorn", icon: "🍿", label: "Bỏng", plural: "hộp bỏng ngô", boardTitle: "BỎNG NGÔ" },
  taco: { type: "taco", icon: "🌮", label: "Taco", plural: "chiếc taco", boardTitle: "TACO" },
  sushi: { type: "sushi", icon: "🍣", label: "Sushi", plural: "miếng sushi", boardTitle: "SUSHI" },
  hotdog: { type: "hotdog", icon: "🌭", label: "Hotdog", plural: "chiếc hotdog", boardTitle: "HOTDOG" },
  pancake: { type: "pancake", icon: "🥞", label: "Pancake", plural: "chiếc pancake", boardTitle: "PANCAKE" },
  boba: { type: "boba", icon: "🧋", label: "Trà sữa", plural: "ly trà sữa", boardTitle: "TRÀ SỮA" },
  mooncake: { type: "mooncake", icon: "🥮", label: "Bánh TT", plural: "chiếc bánh trung thu", boardTitle: "BÁNH TRUNG THU" },
  lantern: { type: "lantern", icon: "🏮", label: "Lồng đèn", plural: "chiếc lồng đèn", boardTitle: "LỒNG ĐÈN" },
};
const REWARD_PARTICLES = {
  star: ["✦", "•"],
  apple: ["✦", "🍃"],
  pizza: ["✦", "▰"],
  lollipop: ["✦", "○"],
  chicken: ["✦", "🔥"],
  fries: ["▌", "✦"],
  burger: ["✦", "▣"],
  donut: ["○", "✦"],
  icecream: ["❄", "✦"],
  noodles: ["≋", "✦"],
  cupcake: ["✦", "♡"],
  cookie: ["•", "✦"],
  chocolate: ["▰", "✦"],
  cake: ["✦", "▴"],
  popcorn: ["•", "✦"],
  taco: ["▰", "✦"],
  sushi: ["○", "✦"],
  hotdog: ["~", "✦"],
  pancake: ["●", "✦"],
  boba: ["○", "✦"],
  mooncake: ["☾", "✦"],
  lantern: ["✦", "◆"],
};
const MILESTONE_EFFECTS = {
  10: { badge: "🏆", title: "KHỞI ĐỘNG RỰC RỠ", icons: "✦ ✦ ✦", duration: 2200 },
  20: { badge: "💎", title: "TỎA SÁNG", icons: "✦ 💎 ✦", duration: 2300 },
  30: { badge: "👑", title: "BỨT PHÁ", icons: "🎉 👑 🎉", duration: 2400 },
  40: { badge: "🚀", title: "TĂNG TỐC", icons: "🚀 ✦ 🚀", duration: 2500 },
  50: { badge: "🌈", title: "NỬA CHẶNG HUYỀN ẢO", icons: "🌈 ✦ 🌈", duration: 2600 },
  60: { badge: "🔥", title: "RỰC LỬA", icons: "🔥 ✦ 🔥", duration: 2700 },
  70: { badge: "⚡", title: "SIÊU TỐC", icons: "⚡ ✦ ⚡", duration: 2800 },
  80: { badge: "💫", title: "VŨ TRỤ NHỎ", icons: "💫 ✦ 💫", duration: 2900 },
  90: { badge: "🌟", title: "GẦN CHẠM ĐỈNH", icons: "🌟 ✦ 🌟", duration: 3000 },
  100: { badge: "🏅", title: "HUYỀN THOẠI 100 ĐIỂM", icons: "🏅 🌟 🏅", duration: 3400 },
  150: { badge: "🎖️", title: "CẤP DANH DỰ 150", icons: "🎖️ ✦ ✨", duration: 4200 },
  200: { badge: "🏵️", title: "CẤP VÔ ĐỊCH 200", icons: "🏵️ 💎 ✦", duration: 4400 },
  250: { badge: "🪄", title: "PHÉP MÀU RỰC RỠ", icons: "🪄 ✨ 💫", duration: 4600 },
  300: { badge: "🛡️", title: "HIỆP SĨ ÁNH SÁNG", icons: "🛡️ ⚡ ✦", duration: 4800 },
  350: { badge: "🌌", title: "DẢI NGÂN HÀ LỚP HỌC", icons: "🌌 💫 ✨", duration: 5000 },
  400: { badge: "🧿", title: "CỔNG ÁNH SÁNG MỞ RA", icons: "🧿 🌈 💠", duration: 5200 },
  450: { badge: "💠", title: "KIM CƯƠNG THƯỢNG HẠNG", icons: "💠 🌟 👑", duration: 5500 },
  500: { badge: "🏆", title: "ĐỈNH CAO HUYỀN THOẠI 500", icons: "🏆 👑 🌟", duration: 6000 },
};

const MILESTONE_RANKS = {
  150: "CẤP DANH DỰ",
  200: "CẤP VÔ ĐỊCH",
  250: "CẤP PHÉP MÀU",
  300: "CẤP HIỆP SĨ",
  350: "CẤP NGÂN HÀ",
  400: "CẤP ÁNH SÁNG",
  450: "CẤP KIM CƯƠNG",
  500: "CẤP HUYỀN THOẠI",
};

const CLASS_RULES = [
  { id: "homework", icon: "📘", title: "Làm bài tập về nhà", detail: "+10 điểm", tone: "good" },
  { id: "perfect", icon: "✅", title: "Làm đúng hết", detail: "+20 điểm", tone: "great" },
  { id: "missing-homework", icon: "⚠️", title: "Không làm bài tập về nhà", detail: "−10 điểm", tone: "bad" },
  { id: "english", icon: "🍗", title: "Trong giờ luôn nói tiếng Anh", detail: "+10 điểm gà rán", tone: "chicken" },
];

const SAMPLE_STUDENTS = [
  { id: "sample-minh-anh", name: "Minh Anh", stars: 4 },
  { id: "sample-tuan-kiet", name: "Tuấn Kiệt", stars: 2 },
  { id: "sample-bao-ngoc", name: "Bảo Ngọc", stars: 6 },
];

function loadStudents() {
  try {
    const saved = JSON.parse(localStorage.getItem(STUDENTS_KEY));
    if (Array.isArray(saved)) {
      return saved.filter(
        (student) =>
          student &&
          typeof student.id === "string" &&
          typeof student.name === "string" &&
          Number.isFinite(student.stars),
      );
    }
  } catch {
    // Ignore damaged browser data and restore the sample list.
  }

  return SAMPLE_STUDENTS;
}

function createStudentId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getMilestone(stars) {
  return MILESTONES.find((milestone) => stars >= milestone) || 0;
}

function getMilestoneEffect(milestone) {
  return MILESTONE_EFFECTS[milestone] || MILESTONE_EFFECTS[10];
}

function getMilestoneTier(milestone) {
  if (milestone >= 500) return 18;
  if (milestone >= 450) return 17;
  if (milestone >= 400) return 16;
  if (milestone >= 350) return 15;
  if (milestone >= 300) return 14;
  if (milestone >= 250) return 13;
  if (milestone >= 200) return 12;
  if (milestone >= 150) return 11;
  return milestone ? Math.floor(milestone / 10) : 0;
}

function getRewardParticle(type, index) {
  const particles = REWARD_PARTICLES[type] || REWARD_PARTICLES.star;
  return particles[index % particles.length];
}

function playTing(audioContextRef) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = audioContextRef.current || new AudioContext();
  audioContextRef.current = context;

  if (context.state === "suspended") context.resume();

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(740, now);
  oscillator.frequency.exponentialRampToValueAtTime(1040, now + 0.09);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.16, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.21);
}

function playPenaltySound(audioContextRef) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = audioContextRef.current || new AudioContext();
  audioContextRef.current = context;

  if (context.state === "suspended") context.resume();

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(390, now);
  oscillator.frequency.exponentialRampToValueAtTime(210, now + 0.16);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.23);
}

function StudentDialog({ mode, initialName, rewardIcon, onClose, onSave }) {
  const [name, setName] = useState(initialName);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function submit(event) {
    event.preventDefault();
    const cleanName = name.trim().replace(/\s+/g, " ");
    if (cleanName) onSave(cleanName);
  }

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="dialog pixel-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="student-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="dialog-icon" aria-hidden="true">{rewardIcon}</div>
        <h2 id="student-dialog-title">
          {mode === "add" ? "Thêm học sinh" : "Sửa tên học sinh"}
        </h2>
        <form onSubmit={submit}>
          <label htmlFor="student-name">Tên học sinh</label>
          <input
            ref={inputRef}
            id="student-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={50}
            autoComplete="off"
            placeholder="Ví dụ: Minh Anh"
          />
          <div className="dialog-actions">
            <button type="button" className="button button-quiet" onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className="button button-primary" disabled={!name.trim()}>
              {mode === "add" ? "Thêm vào lớp" : "Lưu tên"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

function ConfirmDialog({ title, message, confirmLabel, danger = false, onClose, onConfirm }) {
  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="dialog pixel-panel"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-message"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="dialog-icon" aria-hidden="true">{danger ? "⚠️" : "↻"}</div>
        <h2 id="confirm-dialog-title">{title}</h2>
        <p id="confirm-dialog-message">{message}</p>
        <div className="dialog-actions">
          <button type="button" className="button button-quiet" onClick={onClose} autoFocus>
            Hủy
          </button>
          <button
            type="button"
            className={`button ${danger ? "button-danger" : "button-primary"}`}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </section>
    </div>
  );
}

function StudentCard({ student, reward, onAward, onPenalize, onEdit, onReset, onDelete }) {
  const [bursts, setBursts] = useState([]);

  function award() {
    const burstId = createStudentId();
    const nextStars = student.stars + 1;
    const reachedMilestone = MILESTONES.includes(nextStars) ? nextStars : 0;
    setBursts((current) => [...current, { id: burstId, milestone: reachedMilestone, nextTotal: nextStars }]);
    window.setTimeout(() => {
      setBursts((current) => current.filter((burst) => burst.id !== burstId));
    }, reachedMilestone ? getMilestoneEffect(reachedMilestone).duration : 1350);
    onAward(student.id);
  }

  function penalize() {
    const burstId = createStudentId();
    const isEmpty = student.stars === 0;
    setBursts((current) => [
      ...current,
      { id: burstId, penalty: !isEmpty, emptyPenalty: isEmpty, nextTotal: Math.max(0, student.stars - 1) },
    ]);
    window.setTimeout(() => {
      setBursts((current) => current.filter((burst) => burst.id !== burstId));
    }, 1350);
    if (isEmpty) return;
    onPenalize(student.id);
  }

  const visibleStars = Math.min(student.stars, MAX_VISIBLE_STARS);
  const milestone = getMilestone(student.stars);
  const milestoneEffect = milestone ? getMilestoneEffect(milestone) : null;
  const milestoneTier = getMilestoneTier(milestone);

  return (
    <article className={`student-card ${milestone ? `milestone-card milestone-${milestone} milestone-tier-${milestoneTier}` : ""}`}>
      <div className="burst-layer" aria-hidden="true">
        {bursts.map((burst, index) => (
          <span
            key={burst.id}
            className={
              burst.milestone
                ? `milestone-celebration milestone-celebration-${burst.milestone} milestone-celebration-tier-${getMilestoneTier(burst.milestone)}`
                : `star-burst ${burst.penalty ? "penalty-burst" : ""} ${burst.emptyPenalty ? "empty-penalty-burst" : ""}`
            }
            style={{ "--burst-offset": `${(index % 3) * 12 - 12}px` }}
          >
            {burst.milestone ? (
              <>
                {burst.milestone >= 150 && (
                  <span className="celebration-orbit" aria-hidden="true">
                    {Array.from({ length: 8 }, (_, orbitIndex) => (
                      <i
                        key={orbitIndex}
                        style={{
                          "--orbit-index": orbitIndex,
                          "--orbit-angle": `${orbitIndex * 45}deg`,
                          "--orbit-counter-angle": `${orbitIndex * -45}deg`,
                        }}
                      >
                        {orbitIndex % 3 === 0 ? reward.icon : getMilestoneEffect(burst.milestone).badge}
                      </i>
                    ))}
                  </span>
                )}
                {burst.milestone >= 150 && (
                  <span className="celebration-rank-title">{MILESTONE_RANKS[burst.milestone]}</span>
                )}
                <span className="celebration-icons">
                  {getMilestoneEffect(burst.milestone).icons} {reward.icon} {getMilestoneEffect(burst.milestone).icons}
                </span>
                <span className="celebration-title">{getMilestoneEffect(burst.milestone).title}</span>
                <strong>ĐẠT MỐC {burst.milestone} {reward.label.toLocaleUpperCase("vi")}!</strong>
                <span className="celebration-score">TỔNG: {burst.nextTotal}</span>
              </>
            ) : burst.emptyPenalty ? (
              <span className="empty-reward-message">Đang 0 {reward.label.toLocaleLowerCase("vi")}</span>
            ) : (
              <span className={`reward-motion reward-motion-${reward.type} ${burst.penalty ? "is-penalty" : "is-award"}`}>
                <span className="reward-particles">
                  {Array.from({ length: 8 }, (_, particleIndex) => (
                    <i key={particleIndex} style={{ "--particle-index": particleIndex }}>
                      {getRewardParticle(reward.type, particleIndex)}
                    </i>
                  ))}
                </span>
                <span className="reward-main-icon">{reward.icon}</span>
                <span className="reward-change">{burst.penalty ? "−1" : "+1"}</span>
                <span className="reward-new-total">TỔNG: {burst.nextTotal}</span>
              </span>
            )}
          </span>
        ))}
      </div>

      <button className="student-main" type="button" onClick={award} aria-label={`Cộng một ${reward.label.toLocaleLowerCase("vi")} cho ${student.name}`}>
        <span className="student-avatar" aria-hidden="true">
          {student.name.trim().charAt(0).toLocaleUpperCase("vi") || "?"}
        </span>
        <span className="student-info">
          {milestone >= 150 && (
            <span className="milestone-rank-chip" aria-hidden="true">
              {MILESTONE_RANKS[milestone]} · {milestone}
            </span>
          )}
          <span className="student-name">{student.name}</span>
          <span className="star-line" aria-label={`${student.stars} ${reward.plural}`}>
            {student.stars === 0 ? (
              <span className="no-stars">Chưa có {reward.label.toLocaleLowerCase("vi")}</span>
            ) : (
              <>
                <span className="stars reward-icons" aria-hidden="true">
                  {Array.from({ length: visibleStars }, (_, iconIndex) => (
                    <span key={iconIndex} className={`reward-icon-token reward-icon-${reward.type}`}>
                      {reward.icon}
                    </span>
                  ))}
                </span>
                {student.stars > MAX_VISIBLE_STARS && (
                  <span className="more-stars">+{student.stars - MAX_VISIBLE_STARS}</span>
                )}
              </>
            )}
          </span>
          {milestone > 0 && (
            <span className="milestone-badge">
              <span aria-hidden="true">{milestoneEffect.badge}</span>
              <span>ĐẠT MỐC</span>
              <strong>{milestone} {reward.label.toLocaleUpperCase("vi")}</strong>
            </span>
          )}
        </span>
        <span className="star-total">
          <strong key={student.stars} className="total-number-pop">{student.stars}</strong>
          <small>{reward.label.toLocaleUpperCase("vi")}</small>
        </span>
      </button>

      <div className="student-actions">
        <button className="award-button" type="button" onClick={award}>
          <span aria-hidden="true">＋</span> {reward.label}
        </button>
        <button
          className="penalty-button"
          type="button"
          onClick={penalize}
          aria-label={`Trừ một ${reward.label.toLocaleLowerCase("vi")} của ${student.name}`}
        >
          <span aria-hidden="true">−</span> {reward.label}
        </button>
        <button className="icon-button" type="button" onClick={() => onEdit(student)} aria-label={`Sửa tên ${student.name}`} title="Sửa tên">
          ✎
        </button>
        <button className="icon-button" type="button" onClick={() => onReset(student)} aria-label={`Reset sao của ${student.name}`} title="Reset sao">
          ↻
        </button>
        <button className="icon-button icon-button-danger" type="button" onClick={() => onDelete(student)} aria-label={`Xóa ${student.name}`} title="Xóa học sinh">
          ×
        </button>
      </div>
    </article>
  );
}

export default function App() {
  const [students, setStudents] = useState(loadStudents);
  const [soundOn, setSoundOn] = useState(() => localStorage.getItem(SOUND_KEY) !== "off");
  const [rewardType, setRewardType] = useState(() => {
    const savedReward = localStorage.getItem(REWARD_KEY);
    return REWARD_OPTIONS[savedReward] ? savedReward : "star";
  });
  const [studentDialog, setStudentDialog] = useState(null);
  const [confirmation, setConfirmation] = useState(null);
  const audioContextRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem(SOUND_KEY, soundOn ? "on" : "off");
  }, [soundOn]);

  useEffect(() => {
    localStorage.setItem(REWARD_KEY, rewardType);
  }, [rewardType]);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setStudentDialog(null);
        setConfirmation(null);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function awardStar(studentId) {
    setStudents((current) =>
      current.map((student) =>
        student.id === studentId ? { ...student, stars: student.stars + 1 } : student,
      ),
    );
    if (soundOn) playTing(audioContextRef);
  }

  function penalizeStar(studentId) {
    setStudents((current) =>
      current.map((student) =>
        student.id === studentId ? { ...student, stars: Math.max(0, student.stars - 1) } : student,
      ),
    );
    if (soundOn) playPenaltySound(audioContextRef);
  }

  function saveStudentName(name) {
    if (studentDialog.mode === "add") {
      setStudents((current) => [...current, { id: createStudentId(), name, stars: 0 }]);
    } else {
      setStudents((current) =>
        current.map((student) =>
          student.id === studentDialog.student.id ? { ...student, name } : student,
        ),
      );
    }
    setStudentDialog(null);
  }

  function requestReset(student) {
    setConfirmation({
      title: `Reset ${reward.label.toLocaleLowerCase("vi")} của ${student.name}?`,
      message: `Số ${reward.plural} của ${student.name} sẽ trở về 0.`,
      confirmLabel: `Reset ${reward.label.toLocaleLowerCase("vi")}`,
      onConfirm: () => {
        setStudents((current) =>
          current.map((item) => (item.id === student.id ? { ...item, stars: 0 } : item)),
        );
        setConfirmation(null);
      },
    });
  }

  function requestDelete(student) {
    setConfirmation({
      title: `Xóa ${student.name}?`,
      message: "Học sinh và toàn bộ số sao của em này sẽ bị xóa khỏi bảng.",
      confirmLabel: "Xóa học sinh",
      danger: true,
      onConfirm: () => {
        setStudents((current) => current.filter((item) => item.id !== student.id));
        setConfirmation(null);
      },
    });
  }

  function requestResetAll() {
    if (!students.length) return;
    setConfirmation({
      title: `Reset ${reward.label.toLocaleLowerCase("vi")} cả lớp?`,
      message: `Tất cả học sinh sẽ trở về 0 ${reward.plural}. Danh sách học sinh vẫn được giữ nguyên.`,
      confirmLabel: "Reset cả lớp",
      danger: true,
      onConfirm: () => {
        setStudents((current) => current.map((student) => ({ ...student, stars: 0 })));
        setConfirmation(null);
      },
    });
  }

  const totalStars = students.reduce((sum, student) => sum + student.stars, 0);
  const reward = REWARD_OPTIONS[rewardType];

  return (
    <main className="page-shell">
      <div className="sky-decoration clouds cloud-one" aria-hidden="true">☁</div>
      <div className="sky-decoration clouds cloud-two" aria-hidden="true">☁</div>
      <div className="sky-decoration sparkle sparkle-one" aria-hidden="true">✦</div>
      <div className="sky-decoration sparkle sparkle-two" aria-hidden="true">✦</div>

      <section className="classroom-board" aria-labelledby="page-title">
        <header className="board-header">
          <div className="header-star" aria-hidden="true">{reward.icon}</div>
          <div>
            <p className="eyebrow">MỖI CỐ GẮNG · MỘT PHẦN THƯỞNG</p>
            <h1 id="page-title">BẢNG {reward.boardTitle} LỚP HỌC</h1>
            <p className="subtitle">Cùng nhau tỏa sáng mỗi ngày!</p>
          </div>
          <div className="header-star header-star-right" aria-hidden="true">{reward.icon}</div>
        </header>

        <div className="toolbar">
          <div className="class-stats" aria-label="Thống kê lớp">
            <span><strong>{students.length}</strong> học sinh</span>
            <span className="stat-divider" aria-hidden="true">◆</span>
            <span><strong>{totalStars}</strong> {reward.plural}</span>
          </div>
          <div className="reward-picker" role="group" aria-label="Chọn biểu tượng phần thưởng">
            {Object.entries(REWARD_OPTIONS).map(([type, option]) => (
              <button
                key={type}
                type="button"
                className={rewardType === type ? "is-active" : ""}
                onClick={() => setRewardType(type)}
                aria-pressed={rewardType === type}
              >
                <span className={`picker-icon picker-icon-${option.type}`} aria-hidden="true">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
          <div className="toolbar-actions">
            <button
              className={`sound-toggle ${soundOn ? "is-on" : ""}`}
              type="button"
              onClick={() => setSoundOn((current) => !current)}
              aria-pressed={soundOn}
              title={soundOn ? "Tắt âm thanh" : "Bật âm thanh"}
            >
              <span aria-hidden="true">{soundOn ? "🔊" : "🔇"}</span>
              {soundOn ? "Âm thanh bật" : "Âm thanh tắt"}
            </button>
            <button className="reset-all-button" type="button" onClick={requestResetAll} disabled={!students.length || totalStars === 0}>
              ↻ Reset cả lớp
            </button>
          </div>
        </div>

        <div className="students-list">
          {students.length ? (
            students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                reward={reward}
                onAward={awardStar}
                onPenalize={penalizeStar}
                onEdit={(selected) => setStudentDialog({ mode: "edit", student: selected })}
                onReset={requestReset}
                onDelete={requestDelete}
              />
            ))
          ) : (
            <div className="empty-state">
              <span aria-hidden="true">🌱</span>
              <h2>Lớp học đang trống</h2>
              <p>Thêm học sinh đầu tiên để bắt đầu trao sao.</p>
            </div>
          )}
        </div>

        <footer className="board-footer">
          <button className="add-student-button" type="button" onClick={() => setStudentDialog({ mode: "add" })}>
            <span aria-hidden="true">＋</span> Thêm học sinh
          </button>
          <p>Nhấn vào tên hoặc nút “+ {reward.label}” để khen thưởng</p>
        </footer>

        <section className="rules-board" aria-labelledby="rules-title">
          <div className="rules-header">
            <span aria-hidden="true">📜</span>
            <div>
              <p className="rules-eyebrow">CLASS RULES</p>
              <h2 id="rules-title">BẢNG RULES</h2>
            </div>
          </div>
          <div className="rules-grid">
            {CLASS_RULES.map((rule) => (
              <article key={rule.id} className={`rule-card rule-${rule.tone}`}>
                <span className="rule-icon" aria-hidden="true">{rule.icon}</span>
                <span className="rule-title">{rule.title}</span>
                <strong>{rule.detail}</strong>
              </article>
            ))}
          </div>
        </section>
      </section>

      {studentDialog && (
        <StudentDialog
          mode={studentDialog.mode}
          initialName={studentDialog.student?.name || ""}
          rewardIcon={reward.icon}
          onClose={() => setStudentDialog(null)}
          onSave={saveStudentName}
        />
      )}

      {confirmation && (
        <ConfirmDialog
          {...confirmation}
          onClose={() => setConfirmation(null)}
        />
      )}
    </main>
  );
}
