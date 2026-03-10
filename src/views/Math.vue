<template>
  <div class="math-page">
    <div class="nav">
      <button @click="$router.push('/')">← 返回</button>
      <h2>🔢 数学思维</h2>
    </div>
    
    <div class="games">
      <div class="game-card">
        <div class="game-icon">🔢</div>
        <div class="game-info">
          <h3>数字认知</h3>
          <p>认识1-100数字</p>
        </div>
        <div class="play-btn">即将上线</div>
      </div>
      
      <div class="game-card">
        <div class="game-icon">➕</div>
        <div class="game-info">
          <h3>加减法</h3>
          <p>简单加减法练习</p>
        </div>
        <div class="play-btn">即将上线</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.math-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #FFF3E0, #FFE0B2);
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
  color: #E65100;
}

.games {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.game-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.game-icon {
  font-size: 40px;
}

.game-info {
  flex: 1;
}

.game-info h3 {
  font-size: 18px;
  margin-bottom: 4px;
}

.game-info p {
  font-size: 14px;
  color: #888;
}

.play-btn {
  background: #FF9800;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
}
</style>
