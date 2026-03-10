<template>
  <div class="english-page">
    <div class="nav">
      <button @click="$router.push('/')">← 返回</button>
      <h2>🇬🇧 英语启蒙</h2>
    </div>
    
    <div class="games">
      <div class="game-card" @click="$router.push('/game/word-card')">
        <div class="game-icon">🃏</div>
        <div class="game-info">
          <h3>单词卡片</h3>
          <p>点击卡片学单词</p>
        </div>
        <div class="play-btn">开始 →</div>
      </div>
      
      <div class="game-card" @click="$router.push('/game/word-match')">
        <div class="game-icon">🎯</div>
        <div class="game-info">
          <h3>单词消消乐</h3>
          <p>配对消除记单词</p>
        </div>
        <div class="play-btn">开始 →</div>
      </div>
      
      <div class="game-card locked">
        <div class="game-icon">🔒</div>
        <div class="game-info">
          <h3>听力训练</h3>
          <p>即将上线</p>
        </div>
        <div class="play-btn">VIP</div>
      </div>
      
      <div class="game-card locked">
        <div class="game-icon">🔒</div>
        <div class="game-info">
          <h3>看图选词</h3>
          <p>即将上线</p>
        </div>
        <div class="play-btn">VIP</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.english-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
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
  color: #1976D2;
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
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.game-card:active {
  transform: scale(0.98);
}

.game-card.locked {
  opacity: 0.6;
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
  background: #4CAF50;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
}

.game-card.locked .play-btn {
  background: #ccc;
}
</style>
