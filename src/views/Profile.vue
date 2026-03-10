<template>
  <div class="profile-page">
    <div class="nav">
      <button @click="$router.push('/')">← 返回</button>
      <h2>👤 个人中心</h2>
    </div>
    
    <div class="profile-card">
      <div class="avatar">🐻</div>
      <h3>小朋友</h3>
      <p>Lv.1 🌟</p>
    </div>
    
    <div class="stats-grid">
      <div class="stat-item">
        <span class="value">100</span>
        <span class="label">经验值</span>
      </div>
      <div class="stat-item">
        <span class="value">5</span>
        <span class="label">⭐</span>
      </div>
      <div class="stat-item">
        <span class="value">1</span>
        <span class="label">徽章</span>
      </div>
      <div class="stat-item">
        <span class="value">0</span>
        <span class="label">连续天数</span>
      </div>
    </div>
    
    <div class="menu">
      <div class="menu-item">
        <span>🎖️ 徽章墙</span>
        <span>→</span>
      </div>
      <div class="menu-item">
        <span>📊 学习记录</span>
        <span>→</span>
      </div>
      <div class="menu-item">
        <span>⚙️ 设置</span>
        <span>→</span>
      </div>
      <div class="menu-item vip">
        <span>👑 开通VIP</span>
        <span>→</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #F3E5F5, #E1BEE7);
  padding: 20px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.nav button {
  padding: 8px 16px;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
}

.nav h2 {
  font-size: 24px;
  color: #7B1FA2;
}

.profile-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.profile-card .avatar {
  font-size: 64px;
  margin-bottom: 12px;
}

.profile-card h3 {
  font-size: 24px;
  margin-bottom: 8px;
}

.profile-card p {
  color: #FF9800;
  font-weight: bold;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

.stat-item {
  background: white;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.stat-item .value {
  display: block;
  font-size: 28px;
  font-weight: bold;
  color: #4CAF50;
}

.stat-item .label {
  font-size: 14px;
  color: #888;
}

.menu {
  background: white;
  border-radius: 16px;
  overflow: hidden;
}

.menu-item {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item.vip {
  background: linear-gradient(90deg, #FFD700, #FFA500);
  color: white;
}
</style>
